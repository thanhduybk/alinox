package duy.nguyen.alinox.service;

import duy.nguyen.alinox.payload.request.RegisterRequest;
import duy.nguyen.alinox.payload.response.EmployeeResponse;
import duy.nguyen.alinox.security.MyUserDetails;

import java.util.List;

public interface EmployeeService {
    void register(RegisterRequest registerRequest);

    EmployeeResponse addEmployee(RegisterRequest registerRequest, MyUserDetails me);

    void modifyRole(String role, Long empId, MyUserDetails me);

    List<EmployeeResponse> listEmployees(MyUserDetails me);
}
