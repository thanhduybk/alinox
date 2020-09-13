package duy.nguyen.alinox.repository;

import duy.nguyen.alinox.model._ReportEntity;

import java.io.IOException;

public interface _ReportRepository {
    _ReportEntity getReport() throws IOException;
}
