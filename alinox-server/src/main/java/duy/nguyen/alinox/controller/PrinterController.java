package duy.nguyen.alinox.controller;

import duy.nguyen.alinox.payload.request.printer.CreatePrinterRequest;
import duy.nguyen.alinox.payload.request.printer.UpdatePrinterRequest;
import duy.nguyen.alinox.payload.response.ResponseBuilder;
import duy.nguyen.alinox.security.Current;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.PrinterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class PrinterController {
    private final PrinterService printerService;

    public PrinterController(PrinterService printerService) {
        this.printerService = printerService;
    }

    @GetMapping(path = "/printers")
    public ResponseEntity<?> listPrinters(@Current MyUserDetails me) {
        if (me == null) {
            return ResponseEntity.ok(ResponseBuilder.build(printerService.listAllBuiltIn()));
        }

        return ResponseEntity.ok(ResponseBuilder.build(printerService.listPrinters(me.getEmployeeId())));
    }

    @PostMapping(path = "/printers")
    public ResponseEntity<?> createPrinter(@RequestBody CreatePrinterRequest request, @Current MyUserDetails me) {
        return ResponseEntity.ok(ResponseBuilder.build(printerService.createPrinter(request, me), HttpStatus.CREATED));
    }

    @PutMapping(path = "/printers/{id}")
    public ResponseEntity<?> updatePrinter(@PathVariable("id") Long printerId, @RequestBody UpdatePrinterRequest request, @Current MyUserDetails me) {
        return ResponseEntity.ok(ResponseBuilder.build(printerService.updatePrinter(printerId, request, me)));
    }

    @DeleteMapping(path = "/printers/{id}")
    public ResponseEntity<?> deletePrinter(@PathVariable("id") Long printerId, @Current MyUserDetails me) {
        printerService.deletePrinter(printerId, me);
        return ResponseEntity.ok(ResponseBuilder.build(null));
    }
}
