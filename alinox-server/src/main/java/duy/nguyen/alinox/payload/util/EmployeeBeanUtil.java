package duy.nguyen.alinox.payload.util;

import duy.nguyen.alinox.model.EmployeeEntity;
import duy.nguyen.alinox.payload.response.EmployeeResponse;
import duy.nguyen.alinox.security.MyUserDetails;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.time.format.DateTimeFormatter;

public class EmployeeBeanUtil {
    public static EmployeeResponse convert2Dto(EmployeeEntity entity) {
        EmployeeResponse employeeResponse = new EmployeeResponse();

        employeeResponse.setEmployeeId(entity.getEmployeeId());
        employeeResponse.setName(entity.getName());
        employeeResponse.setCreatedAt(entity.getCreatedAt().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        employeeResponse.setRole(entity.getRole());
        employeeResponse.setUsername(entity.getUsername());

        return employeeResponse;
    }
}
