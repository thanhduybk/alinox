package duy.nguyen.alinox.repository;

import duy.nguyen.alinox.model.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
    Optional<EmployeeEntity> findByUsername(String username);

    boolean existsByUsernameAndOrgCode(String username, String orgCode);

    List<EmployeeEntity> findAllByOrgCode(String orgCode);
}
