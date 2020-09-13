package duy.nguyen.alinox.repository;

import duy.nguyen.alinox.model.EmployeeEntity;
import duy.nguyen.alinox.model.ReportEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReportRepository extends JpaRepository<ReportEntity, Long> {
    @Query("select r from ReportEntity r where r.reportId = :reportId and r.employee.employeeId = :myId")
    Optional<ReportEntity> findMyReportById(@Param("reportId") Long reportId, @Param("myId") Long myId);

    List<ReportEntity> findAllByEmployee(EmployeeEntity customer);
}
