package duy.nguyen.alinox.service.impl;

import duy.nguyen.alinox.exception.BadRequestException;
import duy.nguyen.alinox.model.EmployeeEntity;
import duy.nguyen.alinox.model.Role;
import duy.nguyen.alinox.payload.request.RegisterRequest;
import duy.nguyen.alinox.payload.response.EmployeeResponse;
import duy.nguyen.alinox.payload.util.EmployeeBeanUtil;
import duy.nguyen.alinox.repository.EmployeeRepository;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.EmployeeService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;

    private final PasswordEncoder passwordEncoder;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository, PasswordEncoder passwordEncoder) {
        this.employeeRepository = employeeRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public void register(RegisterRequest registerRequest) {
        if (employeeRepository.existsByUsernameAndOrgCode(registerRequest.getUsername(), registerRequest.getOrgCode())) {
            throw new BadRequestException("Username has already in use.");
        }

        String encodedPassword = passwordEncoder.encode(registerRequest.getPassword());

        EmployeeEntity employeeEntity = new EmployeeEntity();
        employeeEntity.setUsername(registerRequest.getUsername());
        employeeEntity.setPassword(encodedPassword);
        employeeEntity.setName(registerRequest.getName());
        employeeEntity.setRole(Role.MASTER.name());
        employeeEntity.setOrgCode(registerRequest.getOrgCode());

        employeeRepository.save(employeeEntity);
    }

    @Override
    public EmployeeResponse addEmployee(RegisterRequest registerRequest, MyUserDetails me) {
        if (employeeRepository.existsByUsernameAndOrgCode(registerRequest.getUsername(), registerRequest.getOrgCode())) {
            throw new BadRequestException("Username has already in use");
        }

        if (!registerRequest.getOrgCode().equals(me.getOrgCode())) {
            throw new BadRequestException("Invalid org code");
        }

        String encodedPassword = passwordEncoder.encode(registerRequest.getPassword());

        EmployeeEntity employeeEntity = new EmployeeEntity();
        employeeEntity.setUsername(registerRequest.getUsername());
        employeeEntity.setPassword(encodedPassword);
        employeeEntity.setName(registerRequest.getName());
        employeeEntity.setRole(Role.MASTER.name());
        employeeEntity.setOrgCode(registerRequest.getOrgCode());
        employeeEntity.setRole(registerRequest.getRole());

        return EmployeeBeanUtil.convert2Dto(employeeRepository.save(employeeEntity));
    }

    @Override
    public void modifyRole(String role, Long empId, MyUserDetails me) {
        Role updatedRole = Role.findByName(role);
        if (updatedRole == null) {
            throw new BadRequestException("Invalid role " + role);
        }

        EmployeeEntity employeeEntity = employeeRepository.findById(empId)
                .orElseThrow(() -> new BadRequestException("User not found with id " + empId));

        if (!employeeEntity.getOrgCode().equals(me.getOrgCode())) {
            throw new BadRequestException("Unknown employee!");
        }

        employeeEntity.setRole(updatedRole.name());

        employeeRepository.save(employeeEntity);
    }

    @Override
    public List<EmployeeResponse> listEmployees(MyUserDetails me) {
        if (me == null) {
            return Collections.emptyList();
        }

        return employeeRepository.findAllByOrgCode(me.getOrgCode()).stream().map(EmployeeBeanUtil::convert2Dto).collect(Collectors.toList());
    }
}
