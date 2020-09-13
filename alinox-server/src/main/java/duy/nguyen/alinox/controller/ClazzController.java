package duy.nguyen.alinox.controller;

import duy.nguyen.alinox.payload.response.ResponseBuilder;
import duy.nguyen.alinox.service.ClazzService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClazzController {
    private final ClazzService clazzService;

    public ClazzController(ClazzService clazzService) {
        this.clazzService = clazzService;
    }

    @GetMapping(value = "/classes")
    public ResponseEntity<?> listClasses() {
        return ResponseEntity.ok(ResponseBuilder.build(clazzService.listClasses()));
    }
}
