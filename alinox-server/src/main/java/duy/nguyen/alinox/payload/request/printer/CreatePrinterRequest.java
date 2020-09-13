package duy.nguyen.alinox.payload.request.printer;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class CreatePrinterRequest {
    @NotBlank
    private String name;
    private Double maxRollSizeHeight;
    @NotNull
    private Double maxRollSizeWidth;
    private Double minRollSizeHeight;
    private Double minRollSizeWidth;
    private Double maxPrintSizeHeight;
    private Double maxPrintSizeWidth;
    private Double minPrintSizeHeight;
    private Double minPrintSizeWidth;
    @NotNull
    private Integer printUnit;

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
}
