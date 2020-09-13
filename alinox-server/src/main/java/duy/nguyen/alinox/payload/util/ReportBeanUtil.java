package duy.nguyen.alinox.payload.util;

import duy.nguyen.alinox.model.ReportEntity;
import duy.nguyen.alinox.payload.response.ReportResponse;
import org.apache.commons.lang.StringUtils;

import java.util.stream.Collectors;

public class ReportBeanUtil {
    public static ReportResponse convert2Dto(ReportEntity entity) {
        ReportResponse reportResponse = new ReportResponse();

        reportResponse.setArtworkResolution(entity.getArtworkResolution());
        reportResponse.setInstances(entity.getArtworks().stream().map(ArtworkInstanceBeanUtil::convert2Dto).collect(Collectors.toList()));
        reportResponse.setClazz(ClazzBeanUtil.convert2Dto(entity.getClazz()));
        reportResponse.setColors(entity.getColors());
        reportResponse.setCreatedAt(entity.getCreatedAt());
        reportResponse.setEmployee(EmployeeBeanUtil.convert2Dto(entity.getEmployee()));
        reportResponse.setInk(entity.getInk());
        reportResponse.setMaterial(MaterialBeanUtil.convert2Dto(entity.getMaterial()));
        reportResponse.setNumColors(entity.getNumColors());
        reportResponse.setPrinter(PrinterBeanUtil.convert2Dto(entity.getPrinter()));
        reportResponse.setProductCode(entity.getProductCode());
        reportResponse.setProductName(entity.getProductName());
        reportResponse.setCustomerCode(entity.getCustomerCode());
        reportResponse.setCustomerName(entity.getCustomerName());
        reportResponse.setCustomerCountry(entity.getCustomerCountry());
        reportResponse.setCustomerProvince(entity.getCustomerProvince());
        reportResponse.setReportId(entity.getReportId());
        reportResponse.setReportUri(entity.getStoragePath());
        reportResponse.setTram(entity.getTram());
        reportResponse.setTramRotation(entity.getTramRotation());

        if (StringUtils.isNotBlank(entity.getProductImage())) {
            reportResponse.setProductImage(entity.getProductImage());
        }

        return reportResponse;
    }
}
