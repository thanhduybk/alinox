package duy.nguyen.alinox.repository;

import duy.nguyen.alinox.model.EmployeeEntity;
import duy.nguyen.alinox.model.PrinterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrinterRepository extends JpaRepository<PrinterEntity, Long> {
    boolean existsByNameAndEmployee(String name, EmployeeEntity ref);

    List<PrinterEntity> findAllByStateIsNull();
}
