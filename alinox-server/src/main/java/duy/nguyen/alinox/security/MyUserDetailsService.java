package duy.nguyen.alinox.security;

import duy.nguyen.alinox.model.EmployeeEntity;
import duy.nguyen.alinox.repository.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MyUserDetailsService implements UserDetailsService {
    private static final Logger log = LoggerFactory.getLogger(MyUserDetailsService.class);

    private final EmployeeRepository employeeRepository;

    public MyUserDetailsService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        EmployeeEntity entity = employeeRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Customer not found with username " + username));

        log.info("Finding user with name " + username);

        return MyUserDetailsBuilder.build(entity);
    }
}
