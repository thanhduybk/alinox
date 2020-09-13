package duy.nguyen.alinox.payload.request.report;

import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

public class CreateReportRequest implements Serializable {
    @NotNull
    private Long materialId;
    @NotNull
    private Long printerId;
    @NotNull
    @Size(min = 1, max = 10)
    private List<String> colors;
    @NotBlank
    private String customerName;
    @NotBlank
    private String customerCode;
    @NotBlank
    private String customerCountry;
    @NotBlank
    private String customerProvince;
    @NotBlank
    private String productName;
    @NotBlank
    private String productCode;
    private Object productImage;
    @NotBlank
    private String ink;
    @NotNull
    private String artworkResolution;
    @NotBlank
    private String tram;
    @NotBlank
    private String tramRotation;

    @NotBlank
    private String coloredArtworks;
    @NotBlank
    private String createdAt;

    public Long getMaterialId() {
        return materialId;
    }

    public void setMaterialId(Long materialId) {
        this.materialId = materialId;
    }

    public Long getPrinterId() {
        return printerId;
    }

    public void setPrinterId(Long printerId) {
        this.printerId = printerId;
    }

    public List<String> getColors() {
        return colors;
    }

    public void setColors(List<String> colors) {
        this.colors = colors;
    }

    public String getCustomerCode() {
        return customerCode;
    }

    public void setCustomerCode(String customerCode) {
        this.customerCode = customerCode;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
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

    public String getColoredArtworks() {
        return coloredArtworks;
    }

    public void setColoredArtworks(String coloredArtworks) {
        this.coloredArtworks = coloredArtworks;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
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

    public Object getProductImage() {
        return productImage;
    }

    public void setProductImage(Object productImage) {
        this.productImage = productImage;
    }
}
