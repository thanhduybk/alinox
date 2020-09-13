package duy.nguyen.alinox.controller;

import duy.nguyen.alinox.exception.BadRequestException;
import duy.nguyen.alinox.payload.request.AuthRequest;
import duy.nguyen.alinox.payload.response.AuthResponse;
import duy.nguyen.alinox.payload.response.ResponseBuilder;
import duy.nguyen.alinox.repository.EmployeeRepository;
import duy.nguyen.alinox.security.Current;
import duy.nguyen.alinox.security.JwtUtil;
import duy.nguyen.alinox.security.MyUserDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

@RestController
public class AuthController {
    private final AuthenticationManager authenticationManager;

    private final EmployeeRepository employeeRepository;

    public AuthController(AuthenticationManager authenticationManager, EmployeeRepository employeeRepository) {
        this.authenticationManager = authenticationManager;
        this.employeeRepository = employeeRepository;
    }

    @PostMapping(value = "/auth/login")
    public ResponseEntity<?> authenticate(@RequestBody @Valid AuthRequest authRequest) {
        if (!employeeRepository.existsByUsernameAndOrgCode(authRequest.getUsername(), authRequest.getOrgCode())) {
            throw new BadRequestException("Username or Organization code invalid");
        }

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

        String jwt = JwtUtil.generateJwtToken((UserDetails) authentication.getPrincipal());

        AuthResponse authResponse = new AuthResponse();
        authResponse.setAccessToken(jwt);
        authResponse.setTokenType("Bearer");

        return ResponseEntity.ok(ResponseBuilder.build(authResponse));
    }

    @GetMapping(path = "/auth/me")
    public ResponseEntity<?> myDetails(@Current MyUserDetails me) {
        return ResponseEntity.ok(ResponseBuilder.build(me));
    }
}
