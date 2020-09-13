package duy.nguyen.alinox.repository;

import duy.nguyen.alinox.model.EmployeeEntity;
import duy.nguyen.alinox.model.InkWiperEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InkWiperRepository extends JpaRepository<InkWiperEntity, Long> {
    boolean existsByThickAndResolutionAndEmployee(Integer thick, Integer resolution, EmployeeEntity ref);

    List<InkWiperEntity> findAllByStateIsNull();
}
