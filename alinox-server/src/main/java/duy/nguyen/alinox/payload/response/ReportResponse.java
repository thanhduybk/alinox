package duy.nguyen.alinox.payload.response;

import java.io.Serializable;
import java.util.List;

public class ReportResponse implements Serializable {
    private Long reportId;
    private EmployeeResponse employee;
    private ClazzResponse clazz;
    private MaterialResponse material;
    private PrinterResponse printer;
    private Integer numColors;
    private List<String> colors;
    private String productName;
    private String productCode;
    private String productImage;
    private String customerName;
    private String customerCode;
    private String customerCountry;
    private String customerProvince;
    private String ink;
    private String artworkResolution;
    private String tram;
    private String tramRotation;
    private String createdAt;
    private String reportUri;
    private List<ArtworkInstanceResponse> instances;

    public Long getReportId() {
        return reportId;
    }

    public void setReportId(Long reportId) {
        this.reportId = reportId;
    }

    public EmployeeResponse getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeResponse employee) {
        this.employee = employee;
    }

    public ClazzResponse getClazz() {
        return clazz;
    }

    public void setClazz(ClazzResponse clazz) {
        this.clazz = clazz;
    }

    public MaterialResponse getMaterial() {
        return material;
    }

    public void setMaterial(MaterialResponse material) {
        this.material = material;
    }

    public PrinterResponse getPrinter() {
        return printer;
    }

    public void setPrinter(PrinterResponse printer) {
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

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getInk() {
        return ink;
    }

    public void setInk(String ink) {
        this.ink = ink;
    }

    public String getArtworkResolution() {
        return artworkResolution;
    }

    public void setArtworkResolution(String artworkResolution) {
        this.artworkResolution = artworkResolution;
    }

    public String getTram() {
        return tram;
    }

    public void setTram(String tram) {
        this.tram = tram;
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

    public String getReportUri() {
        return reportUri;
    }

    public void setReportUri(String reportUri) {
        this.reportUri = reportUri;
    }

    public List<ArtworkInstanceResponse> getInstances() {
        return instances;
    }

    public void setInstances(List<ArtworkInstanceResponse> instances) {
        this.instances = instances;
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
}
