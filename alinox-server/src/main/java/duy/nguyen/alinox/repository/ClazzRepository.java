package duy.nguyen.alinox.repository;

import duy.nguyen.alinox.model.ClazzEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClazzRepository extends JpaRepository<ClazzEntity, Long> {
}
