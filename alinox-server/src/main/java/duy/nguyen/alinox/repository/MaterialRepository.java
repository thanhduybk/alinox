package duy.nguyen.alinox.repository;

import duy.nguyen.alinox.model.ClazzEntity;
import duy.nguyen.alinox.model.EmployeeEntity;
import duy.nguyen.alinox.model.MaterialEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaterialRepository extends JpaRepository<MaterialEntity, Long> {
    boolean existsByNameAndClazzAndEmployee(String name, ClazzEntity clazzId, EmployeeEntity customer);

    List<MaterialEntity> findAll();

    List<MaterialEntity> findAllByStateIsNull();
}
