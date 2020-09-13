package duy.nguyen.alinox.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Artwork {
    private Long aniloxAxis;

    private String color;

    private String propertyName;

    private Long alinoxResolution;

    private Double inkVolume;

    private Long openDegree;

    private Long thickDegree;

    private Long angle;

    private String shape;

    private Long cellDepth;

    @JsonProperty("DO")
    private String DO;

    private InkWiper inkWiper;

    public Long getAniloxAxis() {
        return aniloxAxis;
    }

    public void setAniloxAxis(Long aniloxAxis) {
        this.aniloxAxis = aniloxAxis;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public Long getAlinoxResolution() {
        return alinoxResolution;
    }

    public void setAlinoxResolution(Long alinoxResolution) {
        this.alinoxResolution = alinoxResolution;
    }

    public Double getInkVolume() {
        return inkVolume;
    }

    public void setInkVolume(Double inkVolume) {
        this.inkVolume = inkVolume;
    }

    public Long getOpenDegree() {
        return openDegree;
    }

    public void setOpenDegree(Long openDegree) {
        this.openDegree = openDegree;
    }

    public Long getThickDegree() {
        return thickDegree;
    }

    public void setThickDegree(Long thickDegree) {
        this.thickDegree = thickDegree;
    }

    public Long getAngle() {
        return angle;
    }

    public void setAngle(Long angle) {
        this.angle = angle;
    }

    public String getShape() {
        return shape;
    }

    public void setShape(String shape) {
        this.shape = shape;
    }

    public Long getCellDepth() {
        return cellDepth;
    }

    public void setCellDepth(Long cellDepth) {
        this.cellDepth = cellDepth;
    }

    public String getDO() {
        return DO;
    }

    public void setDO(String DO) {
        this.DO = DO;
    }

    public InkWiper getInkWiper() {
        return inkWiper;
    }

    public void setInkWiper(InkWiper inkWiper) {
        this.inkWiper = inkWiper;
    }
}
