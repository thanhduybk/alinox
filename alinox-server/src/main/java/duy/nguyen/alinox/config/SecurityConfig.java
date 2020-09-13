package duy.nguyen.alinox.config;

import duy.nguyen.alinox.security.JwtFilter;
import duy.nguyen.alinox.security.MyUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.http.HttpMethod.*;
import static org.springframework.http.HttpMethod.GET;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final MyUserDetailsService userDetailsService;

    private final PasswordEncoder passwordEncoder;

    private final JwtFilter jwtFilter;

    public SecurityConfig(MyUserDetailsService userDetailsService, PasswordEncoder passwordEncoder, JwtFilter jwtFilter) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
        this.jwtFilter = jwtFilter;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                .antMatchers(POST, "/auth/login").permitAll()

                .antMatchers(POST, "/employees").anonymous()
                .antMatchers(POST, "/employees/add").hasAuthority("MASTER")
                .antMatchers(PUT, "/employees/*/edit").hasAuthority("MASTER")

                .antMatchers(GET, "/classes").permitAll()

                .antMatchers(GET, "/artworks").permitAll()
                .antMatchers(PUT, "/artworks/*").hasAnyAuthority("MASTER", "MANAGER")

                .antMatchers(GET, "/wipers").permitAll()
                .antMatchers(POST, "/wipers").hasAnyAuthority("MASTER", "MANAGER")
                .antMatchers(PUT, "/wipers/*").hasAnyAuthority("MASTER", "MANAGER")
                .antMatchers(DELETE, "/wipers/*").hasAnyAuthority("MASTER", "MANAGER")

                .antMatchers(GET, "/materials").permitAll()
                .antMatchers(POST, "/materials").hasAnyAuthority("MASTER", "MANAGER")
                .antMatchers(PUT, "/materials/*").hasAnyAuthority("MASTER", "MANAGER")
                .antMatchers(DELETE, "/materials/*").hasAnyAuthority("MASTER", "MANAGER")

                .antMatchers(GET, "/printers").permitAll()
                .antMatchers(POST, "/printers").hasAnyAuthority("MASTER", "MANAGER")
                .antMatchers(PUT, "/printers/*").hasAnyAuthority("MASTER", "MANAGER")
                .antMatchers(DELETE, "/printers/*").hasAnyAuthority("MASTER", "MANAGER")

                .antMatchers(GET, "/reports").permitAll()

                .anyRequest().authenticated();

        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
