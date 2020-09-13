package duy.nguyen.alinox.model;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Entity
@Table(name = "printer")
public class PrinterEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long printerId;

    @Column(nullable = false)
    private String name;

    @Column(name = "max_rh")
    private Double maxRollSizeHeight;

    @Column(name = "max_rw")
    private Double maxRollSizeWidth;

    @Column(name = "min_rh")
    private Double minRollSizeHeight;

    @Column(name = "min_rw")
    private Double minRollSizeWidth;

    @Column(name = "max_ph")
    private Double maxPrintSizeHeight;

    @Column(name = "max_pw")
    private Double maxPrintSizeWidth;

    @Column(name = "min_ph")
    private Double minPrintSizeHeight;

    @Column(name = "min_pw")
    private Double minPrintSizeWidth;

    private Integer printUnit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by")
    private EmployeeEntity employee;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "original_id")
    private PrinterEntity original;

    @Column(name = "state")
    private String state;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public Long getPrinterId() {
        return printerId;
    }

    public void setPrinterId(Long printerId) {
        this.printerId = printerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getMaxRollSizeHeight() {
        return maxRollSizeHeight;
    }

    public void setMaxRollSizeHeight(Double maxRollSizeHeight) {
        this.maxRollSizeHeight = maxRollSizeHeight;
    }

    public Double getMaxRollSizeWidth() {
        return maxRollSizeWidth;
    }

    public void setMaxRollSizeWidth(Double maxRollSizeWidth) {
        this.maxRollSizeWidth = maxRollSizeWidth;
    }

    public Double getMinRollSizeHeight() {
        return minRollSizeHeight;
    }

    public void setMinRollSizeHeight(Double minRollSizeHeight) {
        this.minRollSizeHeight = minRollSizeHeight;
    }

    public Double getMinRollSizeWidth() {
        return minRollSizeWidth;
    }

    public void setMinRollSizeWidth(Double minRollSizeWidth) {
        this.minRollSizeWidth = minRollSizeWidth;
    }

    public Double getMaxPrintSizeHeight() {
        return maxPrintSizeHeight;
    }

    public void setMaxPrintSizeHeight(Double maxPrintSizeHeight) {
        this.maxPrintSizeHeight = maxPrintSizeHeight;
    }

    public Double getMaxPrintSizeWidth() {
        return maxPrintSizeWidth;
    }

    public void setMaxPrintSizeWidth(Double maxPrintSizeWidth) {
        this.maxPrintSizeWidth = maxPrintSizeWidth;
    }

    public Double getMinPrintSizeHeight() {
        return minPrintSizeHeight;
    }

    public void setMinPrintSizeHeight(Double minPrintSizeHeight) {
        this.minPrintSizeHeight = minPrintSizeHeight;
    }

    public Double getMinPrintSizeWidth() {
        return minPrintSizeWidth;
    }

    public void setMinPrintSizeWidth(Double minPrintSizeWidth) {
        this.minPrintSizeWidth = minPrintSizeWidth;
    }

    public Integer getPrintUnit() {
        return printUnit;
    }

    public void setPrintUnit(Integer printUnit) {
        this.printUnit = printUnit;
    }

    public EmployeeEntity getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeEntity customer) {
        this.employee = customer;
    }

    public PrinterEntity getOriginal() {
        return original;
    }

    public void setOriginal(PrinterEntity original) {
        this.original = original;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now(ZoneId.of("Asia/Ho_Chi_Minh"));
        this.setUpdatedAt(now);
        this.setCreatedAt(now);
    }

    @PreUpdate
    public void preUpdate() {
        LocalDateTime now = LocalDateTime.now(ZoneId.of("Asia/Ho_Chi_Minh"));
        this.setUpdatedAt(now);
    }
}
