package duy.nguyen.alinox.model;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Entity
@Table(name = "artwork")
public class ArtworkEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long artworkId;

    @Column(nullable = false)
    private String propertyName;

    @Column(nullable = false, updatable = false)
    private Double maxInkVolume;

    @Column(nullable = false, updatable = false)
    private Double minInkVolume;

    @Column(nullable = false)
    private Double inkVolume;

    @Column(nullable = false)
    private Integer alinoxResolution;

    private Integer openDegree;

    private Integer thickDegree;

    private Integer angle;

    private String shape;

    @Column(nullable = false, updatable = false)
    private Integer maxCellDepth;

    @Column(nullable = false, updatable = false)
    private Integer minCellDepth;

    private Integer cellDepth;

    @Column(name = "do_percent")
    private Integer DO;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "wiper_id", nullable = false)
    private InkWiperEntity wiper;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "clazz_id", nullable = false)
    private ClazzEntity clazz;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by")
    private EmployeeEntity employee;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "original_id")
    private ArtworkEntity original;

    @Column(name = "state")
    private String state;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public Long getArtworkId() {
        return artworkId;
    }

    public void setArtworkId(Long artworkId) {
        this.artworkId = artworkId;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public Double getMaxInkVolume() {
        return maxInkVolume;
    }

    public void setMaxInkVolume(Double maxInkVolume) {
        this.maxInkVolume = maxInkVolume;
    }

    public Double getMinInkVolume() {
        return minInkVolume;
    }

    public void setMinInkVolume(Double minInkVolume) {
        this.minInkVolume = minInkVolume;
    }

    public Double getInkVolume() {
        return inkVolume;
    }

    public void setInkVolume(Double inkVolume) {
        this.inkVolume = inkVolume;
    }

    public Integer getAlinoxResolution() {
        return alinoxResolution;
    }

    public void setAlinoxResolution(Integer alinoxResolution) {
        this.alinoxResolution = alinoxResolution;
    }

    public Integer getOpenDegree() {
        return openDegree;
    }

    public void setOpenDegree(Integer openDegree) {
        this.openDegree = openDegree;
    }

    public Integer getThickDegree() {
        return thickDegree;
    }

    public void setThickDegree(Integer thickDegree) {
        this.thickDegree = thickDegree;
    }

    public Integer getAngle() {
        return angle;
    }

    public void setAngle(Integer angle) {
        this.angle = angle;
    }

    public String getShape() {
        return shape;
    }

    public void setShape(String shape) {
        this.shape = shape;
    }

    public Integer getMaxCellDepth() {
        return maxCellDepth;
    }

    public void setMaxCellDepth(Integer maxCellDepth) {
        this.maxCellDepth = maxCellDepth;
    }

    public Integer getMinCellDepth() {
        return minCellDepth;
    }

    public void setMinCellDepth(Integer minCellDepth) {
        this.minCellDepth = minCellDepth;
    }

    public Integer getCellDepth() {
        return cellDepth;
    }

    public void setCellDepth(Integer cellDepth) {
        this.cellDepth = cellDepth;
    }

    public Integer getDO() {
        return DO;
    }

    public void setDO(Integer DO) {
        this.DO = DO;
    }

    public InkWiperEntity getWiper() {
        return wiper;
    }

    public void setWiper(InkWiperEntity wiper) {
        this.wiper = wiper;
    }

    public ClazzEntity getClazz() {
        return clazz;
    }

    public void setClazz(ClazzEntity clazz) {
        this.clazz = clazz;
    }

    public EmployeeEntity getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeEntity customer) {
        this.employee = customer;
    }

    public ArtworkEntity getOriginal() {
        return original;
    }

    public void setOriginal(ArtworkEntity original) {
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
