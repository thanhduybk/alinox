package duy.nguyen.alinox.controller;

import duy.nguyen.alinox.payload.request.wiper.CreateInkWiperRequest;
import duy.nguyen.alinox.payload.request.wiper.UpdateInkWiperRequest;
import duy.nguyen.alinox.payload.response.ResponseBuilder;
import duy.nguyen.alinox.security.Current;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.InkWiperService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class InkWiperController {
    private final InkWiperService inkWiperService;

    public InkWiperController(InkWiperService inkWiperService) {
        this.inkWiperService = inkWiperService;
    }

    @GetMapping(path = "/wipers")
    public ResponseEntity<?> listWipers(@Current MyUserDetails me) {
        if (me == null) {
            return ResponseEntity.ok(ResponseBuilder.build(inkWiperService.findAllBuiltIn()));
        }

        return ResponseEntity.ok(ResponseBuilder.build(inkWiperService.listInkWipers(me.getEmployeeId())));
    }

    @PostMapping(path = "/wipers")
    public ResponseEntity<?> createWiper(@RequestBody CreateInkWiperRequest request, @Current MyUserDetails me) {
        return ResponseEntity.ok(ResponseBuilder.build(inkWiperService.createInkWiper(request, me), HttpStatus.CREATED));
    }

    @PutMapping(path = "/wipers/{id}")
    public ResponseEntity<?> updateWiper(@PathVariable("id") Long wiperId, @RequestBody UpdateInkWiperRequest request, @Current MyUserDetails me) {
        return ResponseEntity.ok(ResponseBuilder.build(inkWiperService.updateInkWiper(wiperId, request, me)));
    }

    @DeleteMapping(path = "/wipers/{id}")
    public ResponseEntity<?> deleteWiper(@PathVariable("id") Long wiperId, @Current MyUserDetails me) {
        inkWiperService.deleteInkWiper(wiperId, me);
        return ResponseEntity.ok(ResponseBuilder.build(null));
    }
}
