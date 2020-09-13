package duy.nguyen.alinox.security;

import duy.nguyen.alinox.model.EmployeeEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.time.format.DateTimeFormatter;
import java.util.Collections;

public class MyUserDetailsBuilder {
    public static MyUserDetails build(EmployeeEntity customer) {
        MyUserDetails myUserDetails = new MyUserDetails();

        myUserDetails.setEmployeeId(customer.getEmployeeId());
        myUserDetails.setName(customer.getName());
        myUserDetails.setPassword(customer.getPassword());
        myUserDetails.setUsername(customer.getUsername());
        myUserDetails.setRef(customer);
        myUserDetails.setRole(customer.getRole());
        myUserDetails.setOrgCode(customer.getOrgCode());
        myUserDetails.setAuthorities(Collections.singleton(new SimpleGrantedAuthority(customer.getRole())));
        myUserDetails.setCreatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd").format(customer.getCreatedAt()));

        return myUserDetails;
    }
}
