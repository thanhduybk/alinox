package duy.nguyen.alinox.controller;

import duy.nguyen.alinox.payload.request.RegisterRequest;
import duy.nguyen.alinox.payload.request.UpdateRoleRequest;
import duy.nguyen.alinox.payload.response.EmployeeResponse;
import duy.nguyen.alinox.payload.response.ResponseBuilder;
import duy.nguyen.alinox.security.Current;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping(path = "/employees")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        employeeService.register(registerRequest);

        return ResponseEntity.ok(ResponseBuilder.build(null, HttpStatus.CREATED));
    }

    @PostMapping(path = "/employees/add")
    public ResponseEntity<?> addEmployee(@RequestBody RegisterRequest registerRequest, @Current MyUserDetails me) {
        EmployeeResponse employeeResponse = employeeService.addEmployee(registerRequest, me);

        return ResponseEntity.ok(ResponseBuilder.build(employeeResponse, HttpStatus.CREATED));
    }

    @PutMapping(path = "/employees/{id}/edit")
    public ResponseEntity<?> modifyRole(@RequestBody UpdateRoleRequest role, @PathVariable("id") Long empId, @Current MyUserDetails me) {
        employeeService.modifyRole(role.getRole(), empId, me);

        return ResponseEntity.ok(ResponseBuilder.build(null, HttpStatus.OK));
    }

    @GetMapping(path = "/employees")
    public ResponseEntity<?> listEmployees(@Current MyUserDetails me) {
        List<EmployeeResponse> employeeResponses = employeeService.listEmployees(me);

        employeeResponses.forEach(e -> e.setMe(e.getEmployeeId().equals(me.getEmployeeId())));

        return ResponseEntity.ok(ResponseBuilder.build(employeeResponses));
    }
}
