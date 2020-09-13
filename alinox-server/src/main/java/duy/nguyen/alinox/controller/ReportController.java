package duy.nguyen.alinox.controller;

import duy.nguyen.alinox.payload.request.report.CreateReportRequest;
import duy.nguyen.alinox.payload.response.ResponseBuilder;
import duy.nguyen.alinox.security.Current;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.ReportService;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.util.concurrent.ExecutionException;

@Controller
public class ReportController {
    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @PostMapping(value = "/reports")
    public ResponseEntity<?> saveReport(@ModelAttribute CreateReportRequest reportRequest, @Current MyUserDetails me) throws ExecutionException, InterruptedException {
        return ResponseEntity.ok(ResponseBuilder.build(reportService.createReport(reportRequest, me)));
    }

    @GetMapping(value = "/reports/{id}/download", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<?> downloadReport(@PathVariable("id") Long reportId, @Current MyUserDetails me) {
        ByteArrayInputStream bytes = reportService.downloadReport(reportId, me);

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=report.pdf");

        return ResponseEntity.ok().headers(headers).body(new InputStreamResource(bytes));
    }

    @GetMapping(value = "/reports")
    public ResponseEntity<?> listReports(@Current MyUserDetails me) {
        return ResponseEntity.ok(ResponseBuilder.build(reportService.listReports(me)));
    }

    @DeleteMapping(value = "/reports/{id}")
    public ResponseEntity<?> deleteReport(@PathVariable("id") Long reportId, @Current MyUserDetails me) {
        reportService.deleteReport(reportId);

        return ResponseEntity.ok(ResponseBuilder.build(null));
    }
}
