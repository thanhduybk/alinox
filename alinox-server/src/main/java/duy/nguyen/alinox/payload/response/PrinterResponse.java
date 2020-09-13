package duy.nguyen.alinox.payload.response;

import java.io.Serializable;

public class PrinterResponse implements Serializable {
    private Long printerId;
    private String name;
    private Double maxRh;
    private Double maxRw;
    private Double minRh;
    private Double minRw;
    private Double maxPh;
    private Double maxPw;
    private Double minPh;
    private Double minPw;
    private Integer printUnit;
    private Long createdBy;
    private String state;
    private String createdAt;
    private String updatedAt;

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

    public Double getMaxRh() {
        return maxRh;
    }

    public void setMaxRh(Double maxRh) {
        this.maxRh = maxRh;
    }

    public Double getMaxRw() {
        return maxRw;
    }

    public void setMaxRw(Double maxRw) {
        this.maxRw = maxRw;
    }

    public Double getMinRh() {
        return minRh;
    }

    public void setMinRh(Double minRh) {
        this.minRh = minRh;
    }

    public Double getMinRw() {
        return minRw;
    }

    public void setMinRw(Double minRw) {
        this.minRw = minRw;
    }

    public Double getMaxPh() {
        return maxPh;
    }

    public void setMaxPh(Double maxPh) {
        this.maxPh = maxPh;
    }

    public Double getMaxPw() {
        return maxPw;
    }

    public void setMaxPw(Double maxPw) {
        this.maxPw = maxPw;
    }

    public Double getMinPh() {
        return minPh;
    }

    public void setMinPh(Double minPh) {
        this.minPh = minPh;
    }

    public Double getMinPw() {
        return minPw;
    }

    public void setMinPw(Double minPw) {
        this.minPw = minPw;
    }

    public Integer getPrintUnit() {
        return printUnit;
    }

    public void setPrintUnit(Integer printUnit) {
        this.printUnit = printUnit;
    }

    public Long getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Long createdBy) {
        this.createdBy = createdBy;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }
}
