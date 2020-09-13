package duy.nguyen.alinox.service;

import duy.nguyen.alinox.payload.request.report.CreateReportRequest;
import duy.nguyen.alinox.payload.response.ReportResponse;
import duy.nguyen.alinox.security.MyUserDetails;

import java.io.ByteArrayInputStream;
import java.util.List;
import java.util.concurrent.ExecutionException;

public interface ReportService {

    ReportResponse createReport(CreateReportRequest request, MyUserDetails me) throws ExecutionException, InterruptedException;

    ByteArrayInputStream downloadReport(Long reportId, MyUserDetails me);

    List<ReportResponse> listReports(MyUserDetails me);

    void deleteReport(Long reportId);
}
