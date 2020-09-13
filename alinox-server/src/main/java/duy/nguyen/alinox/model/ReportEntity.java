package duy.nguyen.alinox.model;

import duy.nguyen.alinox.model.converter.ListConverter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "report")
public class ReportEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reportId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id", nullable = false)
    private EmployeeEntity employee;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "clazz_id", nullable = false)
    private ClazzEntity clazz;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "material_id", nullable = false)
    private MaterialEntity material;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "printer_id", nullable = false)
    private PrinterEntity printer;

    @Column(nullable = false)
    private Integer numColors;

    @Convert(converter = ListConverter.class)
    private List<String> colors;

    @Column(nullable = false)
    private String productCode;

    @Column(nullable = false)
    private String productName;

    private String productImage;

    @Column(nullable = false)
    private String customerName;

    @Column(nullable = false)
    private String customerCode;

    @Column(nullable = false)
    private String customerCountry;

    @Column(nullable = false)
    private String customerProvince;

    private String ink;

    @Column(nullable = false)
    private String artworkResolution;

    private String tram;

    @Column(nullable = false)
    private String tramRotation;

    @OneToMany(mappedBy = "report", orphanRemoval = true, cascade = CascadeType.ALL)
    private List<ArtworkInstanceEntity> artworks = new ArrayList<>();

    private String createdAt;

    private LocalDateTime updatedAt;

    @Column(nullable = false)
    private String storagePath;

    public Long getReportId() {
        return reportId;
    }

    public void setReportId(Long reportId) {
        this.reportId = reportId;
    }

    public EmployeeEntity getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeEntity customer) {
        this.employee = customer;
    }

    public ClazzEntity getClazz() {
        return clazz;
    }

    public void setClazz(ClazzEntity clazz) {
        this.clazz = clazz;
    }

    public MaterialEntity getMaterial() {
        return material;
    }

    public void setMaterial(MaterialEntity material) {
        this.material = material;
    }

    public PrinterEntity getPrinter() {
        return printer;
    }

    public void setPrinter(PrinterEntity printer) {
        this.printer = printer;
    }

    public Integer getNumColors() {
        return numColors;
    }

    public void setNumColors(Integer numColors) {
        this.numColors = numColors;
    }

    public List<String> getColors() {
        return colors;
    }

    public void setColors(List<String> colors) {
        this.colors = colors;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerCode() {
        return customerCode;
    }

    public void setCustomerCode(String customerCode) {
        this.customerCode = customerCode;
    }

    public String getInk() {
        return ink;
    }

    public void setInk(String ink) {
        this.ink = ink;
    }

    public String getTram() {
        return tram;
    }

    public void setTram(String tram) {
        this.tram = tram;
    }

    public List<ArtworkInstanceEntity> getArtworks() {
        return artworks;
    }

    public void setArtworks(List<ArtworkInstanceEntity> artworks) {
        this.artworks = artworks;
    }

    public void setArtworkResolution(String artworkResolution) {
        this.artworkResolution = artworkResolution;
    }

    public String getTramRotation() {
        return tramRotation;
    }

    public void setTramRotation(String tramRotation) {
        this.tramRotation = tramRotation;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getArtworkResolution() {
        return artworkResolution;
    }

    public String getStoragePath() {
        return storagePath;
    }

    public void setStoragePath(String storagePath) {
        this.storagePath = storagePath;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getCustomerCountry() {
        return customerCountry;
    }

    public void setCustomerCountry(String customerCountry) {
        this.customerCountry = customerCountry;
    }

    public String getCustomerProvince() {
        return customerProvince;
    }

    public void setCustomerProvince(String customerProvince) {
        this.customerProvince = customerProvince;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public void addArtworkInstance(ArtworkInstanceEntity artworkInstanceEntity) {
        this.getArtworks().add(artworkInstanceEntity);
        artworkInstanceEntity.setReport(this);
    }

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now(ZoneId.of("Asia/Ho_Chi_Minh"));
        this.setUpdatedAt(now);
    }

    @PreUpdate
    public void preUpdate() {
        LocalDateTime now = LocalDateTime.now(ZoneId.of("Asia/Ho_Chi_Minh"));
        this.setUpdatedAt(now);
    }
}
