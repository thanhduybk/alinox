package duy.nguyen.alinox.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.itextpdf.html2pdf.ConverterProperties;
import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.html2pdf.attach.impl.tags.ImgTagWorker;
import com.itextpdf.io.font.FontProgram;
import com.itextpdf.io.font.FontProgramFactory;
import com.itextpdf.io.font.PdfEncodings;
import com.itextpdf.kernel.colors.Color;
import com.itextpdf.kernel.colors.DeviceRgb;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.styledxmlparser.node.IElementNode;
import duy.nguyen.alinox.aws.s3.S3Client;
import duy.nguyen.alinox.exception.BadRequestException;
import duy.nguyen.alinox.model.*;
import duy.nguyen.alinox.payload.request.report.ColoredArtwork;
import duy.nguyen.alinox.payload.request.report.CreateReportRequest;
import duy.nguyen.alinox.payload.response.ReportResponse;
import duy.nguyen.alinox.payload.util.ReportBeanUtil;
import duy.nguyen.alinox.repository.*;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.ReportService;
import org.apache.commons.lang.StringUtils;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.tools.generic.DateTool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.services.s3.model.GetUrlRequest;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.StringWriter;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
@Transactional
public class ReportServiceImpl implements ReportService {
    private static final Logger log = LoggerFactory.getLogger(ReportServiceImpl.class);

    private final MaterialRepository materialRepository;
    private final PrinterRepository printerRepository;
    private final ArtworkRepository artworkRepository;
    private final ReportRepository reportRepository;

    private final S3Client s3;

    public ReportServiceImpl(MaterialRepository materialRepository, PrinterRepository printerRepository, ArtworkRepository artworkRepository, ReportRepository reportRepository, S3Client s3) {
        this.materialRepository = materialRepository;
        this.printerRepository = printerRepository;
        this.artworkRepository = artworkRepository;
        this.reportRepository = reportRepository;

        this.s3 = s3;
    }

    public static byte[] generatePdfReport(ReportEntity reportEntity, String imageBase64, String imageType) {
        VelocityEngine engine = new VelocityEngine();
        engine.setProperty(RuntimeConstants.RESOURCE_LOADER, "class");
        engine.setProperty("class.resource.loader.class", "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");
        engine.init();

        Template template = engine.getTemplate("templates/report.vm", "UTF-8");

        VelocityContext context = new VelocityContext();
        context.put("data", reportEntity);

        if (imageBase64 != null && imageType != null) {
            context.put("image", imageBase64);
            context.put("imageType", imageType);
        }

        StringWriter writer = new StringWriter();
        template.merge(context, writer);

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        HtmlConverter.convertToPdf(writer.toString(), out);

        return out.toByteArray();
    }

    @Override
    public ReportResponse createReport(CreateReportRequest request, MyUserDetails me) throws ExecutionException, InterruptedException {
        MaterialEntity material = materialRepository.findById(request.getMaterialId())
                .orElseThrow(() -> new BadRequestException("Material not found with id " + request.getMaterialId()));

        PrinterEntity printer = printerRepository.findById(request.getPrinterId())
                .orElseThrow(() -> new BadRequestException("Printer not found with id " + request.getPrinterId()));

        List<ColoredArtwork> coloredArtworks = extractColoredArtworks(request.getColoredArtworks());

        ReportEntity reportEntity = new ReportEntity();

        reportEntity.setEmployee(me.getRef());
        reportEntity.setClazz(material.getClazz());
        reportEntity.setMaterial(material);
        reportEntity.setPrinter(printer);
        reportEntity.setNumColors(request.getColors().size());
        reportEntity.setColors(request.getColors());
        reportEntity.setInk(request.getInk());
        reportEntity.setArtworkResolution(request.getArtworkResolution());
        reportEntity.setTram(request.getTram());
        reportEntity.setTramRotation(request.getTramRotation());
        reportEntity.setCustomerCode(request.getCustomerCode());
        reportEntity.setCustomerName(request.getCustomerName());
        reportEntity.setCustomerCountry(request.getCustomerCountry());
        reportEntity.setCustomerProvince(request.getCustomerProvince());
        reportEntity.setProductCode(request.getProductCode());
        reportEntity.setProductName(request.getProductName());
        reportEntity.setCreatedAt(request.getCreatedAt());

        Set<Long> coloredProps = coloredArtworks.stream().map(ColoredArtwork::getArtworkId).collect(Collectors.toSet());

        List<ArtworkEntity> artworks = artworkRepository.findAllByClazzAndArtworkIdIn(material.getClazz(), coloredProps);

        if (artworks.isEmpty()) {
            throw new BadRequestException("Invalid artworks information");
        }

        for (ColoredArtwork coloredArtwork : coloredArtworks) {
            ArtworkInstanceEntity artworkInstanceEntity = new ArtworkInstanceEntity();
            artworkInstanceEntity.setAniloxAxis(coloredArtwork.getAniloxAxis());
            artworkInstanceEntity.setColor(coloredArtwork.getColor());

            for (ArtworkEntity artwork : artworks) {
                if (coloredArtwork.getArtworkId().equals(artwork.getArtworkId())) {
                    artworkInstanceEntity.setArtwork(artwork);
                    break;
                }
            }

            reportEntity.addArtworkInstance(artworkInstanceEntity);
        }

        String imageBase64 = null;
        String imageType = null;

        if (request.getProductImage() != null && request.getProductImage() instanceof MultipartFile) {
            try {
                String s3ProductImageKey = UUID.randomUUID().toString();

                CompletableFuture<PutObjectResponse> futureProductImage = s3.put("anilox-image", s3ProductImageKey, ((MultipartFile) request.getProductImage()).getBytes());

                futureProductImage.whenComplete((res, err) -> {
                    if (res != null) {
                        log.info("Upload product image succeeded! Response: " + res);
                    } else {
                        log.error("Upload product image failed! Error: " + err.getMessage());
                    }
                });

                futureProductImage.get();

                reportEntity.setProductImage(s3ProductImageKey);

                imageType = ((MultipartFile) request.getProductImage()).getContentType();
                imageBase64 = Base64.getEncoder().encodeToString(((MultipartFile) request.getProductImage()).getBytes());
            } catch (Exception e) {
                log.error("Exception {}. Message {}", e.getClass().getSimpleName(), e.getMessage());
            }
        }

        String s3ReportKey = UUID.randomUUID().toString();

        reportEntity.setStoragePath(s3ReportKey);

        CompletableFuture<PutObjectResponse> futureReport = s3.put("alinox", s3ReportKey, generatePdfReport(reportEntity, imageBase64, imageType));

        futureReport.whenComplete((res, err) -> {
            if (res != null) {
                log.info("Upload report succeeded! Response: " + res);
            } else {
                log.error("Upload report failed! Error: " + err.getMessage());
            }
        });

        futureReport.get();

        return ReportBeanUtil.convert2Dto(reportRepository.saveAndFlush(reportEntity));
    }

    private List<ColoredArtwork> extractColoredArtworks(String coloredArtworks) {
        List<ColoredArtwork> ret = new ArrayList<>();

        String[] artworkStrings = coloredArtworks.replaceAll("[\\[\\]]", "")
                .split("\\|");

        for (String artworkString : artworkStrings) {
            String[] pairs = artworkString.substring(1, artworkString.length() - 1)
                    .replace("\"", "")
                    .split(",");

            ColoredArtwork artwork = new ColoredArtwork();
            for (String pair : pairs) {
                String key = pair.split(":")[0];
                String value = pair.split(":")[1];

                if (key.equals("aniloxAxis")) {
                    artwork.setAniloxAxis(Integer.valueOf(value.replaceAll("\"", "")));
                } else if (key.equals("color")) {
                    artwork.setColor(value);
                } else {
                    artwork.setArtworkId(Long.valueOf(value.replaceAll("\"", "")));
                }
            }
            ret.add(artwork);
        }

        return ret;
    }

    @Override
    public ByteArrayInputStream downloadReport(Long reportId, MyUserDetails me) {
        ReportEntity report = reportRepository.findMyReportById(reportId, me.getEmployeeId())
                .orElseThrow(() -> new BadRequestException("Report not found with id " + reportId));

        CompletableFuture<ResponseBytes<GetObjectResponse>> future = s3.get("alinox", report.getStoragePath());

        try {
            ResponseBytes<GetObjectResponse> res = future.join();
            return new ByteArrayInputStream(res.asByteArray());
        } catch (CompletionException e) {
            log.error("Failed to download report with key " + report.getStoragePath());
            log.error("Error: " + e.getMessage());
            throw new BadRequestException("Failed to download report");
        }
    }

    @Override
    public List<ReportResponse> listReports(MyUserDetails me) {
        if (me == null) {
            return Collections.emptyList();
        }

        List<ReportEntity> reports = reportRepository.findAllByEmployee(me.getRef());

        String s3Url = "https://anilox-image.s3-ap-southeast-1.amazonaws.com/";

        List<ReportResponse> responses = reports.stream().map(ReportBeanUtil::convert2Dto).collect(Collectors.toList());

        for (ReportResponse response : responses) {
            if (StringUtils.isNotBlank(response.getProductImage())) {
                response.setProductImage(s3Url + response.getProductImage());
            }
        }

        responses.sort((a, b) -> -a.getReportId().compareTo(b.getReportId()));

        return responses;
    }

    @Override
    public void deleteReport(Long reportId) {
        ReportEntity report = reportRepository.findById(reportId)
                .orElseThrow(() -> new BadRequestException("Report not found with id " + reportId));

        reportRepository.delete(report);
    }
}
