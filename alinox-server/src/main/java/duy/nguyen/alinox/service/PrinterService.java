package duy.nguyen.alinox.service;


import duy.nguyen.alinox.payload.request.printer.CreatePrinterRequest;
import duy.nguyen.alinox.payload.request.printer.UpdatePrinterRequest;
import duy.nguyen.alinox.payload.response.PrinterResponse;
import duy.nguyen.alinox.security.MyUserDetails;

import java.util.List;

public interface PrinterService {
    PrinterResponse createPrinter(CreatePrinterRequest request, MyUserDetails me);

    PrinterResponse updatePrinter(Long printerId, UpdatePrinterRequest request, MyUserDetails me);

    void deletePrinter(Long printerId, MyUserDetails me);

    List<PrinterResponse> listPrinters(Long customerId);

    List<PrinterResponse> listAllBuiltIn();
}
