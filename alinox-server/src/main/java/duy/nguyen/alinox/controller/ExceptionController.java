package duy.nguyen.alinox.controller;

import org.springframework.boot.autoconfigure.web.servlet.error.AbstractErrorController;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;

@RestController
public class ExceptionController extends AbstractErrorController {
    public ExceptionController(ErrorAttributes errorAttributes) {
        super(errorAttributes, Collections.emptyList());
    }

    @Override
    public String getErrorPath() {
        return "error";
    }

    @RequestMapping(path = "/error")
    public ResponseEntity<?> handleError(HttpServletRequest request) {
        return new ResponseEntity<>(getErrorAttributes(request, false), getStatus(request));
    }
}
