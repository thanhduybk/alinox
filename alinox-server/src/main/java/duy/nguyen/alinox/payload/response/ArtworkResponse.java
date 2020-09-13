package duy.nguyen.alinox.payload.response;

import java.io.Serializable;

public class ArtworkResponse implements Serializable {
    private Long artworkId;
    private String propertyName;
    private Double inkVolume;
    private Double maxInkVolume;
    private Double minInkVolume;
    private Integer aniloxResolution;
    private Integer openDegree;
    private Integer thickDegree;
    private Integer angle;
    private String shape;
    private Integer cellDepth;
    private Integer maxCellDepth;
    private Integer minCellDepth;
    private Integer doPercent;
    private InkWiperResponse wiper;
    private Long createdBy;
    private String state;
    private String createdAt;
    private String updatedAt;
    private ClazzResponse clazz;

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

    public Double getInkVolume() {
        return inkVolume;
    }

    public void setInkVolume(Double inkVolume) {
        this.inkVolume = inkVolume;
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

    public Integer getAniloxResolution() {
        return aniloxResolution;
    }

    public void setAniloxResolution(Integer aniloxResolution) {
        this.aniloxResolution = aniloxResolution;
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

    public Integer getCellDepth() {
        return cellDepth;
    }

    public void setCellDepth(Integer cellDepth) {
        this.cellDepth = cellDepth;
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

    public Integer getDoPercent() {
        return doPercent;
    }

    public void setDoPercent(Integer doPercent) {
        this.doPercent = doPercent;
    }

    public InkWiperResponse getWiper() {
        return wiper;
    }

    public void setWiper(InkWiperResponse wiper) {
        this.wiper = wiper;
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

    public ClazzResponse getClazz() {
        return clazz;
    }

    public void setClazz(ClazzResponse clazz) {
        this.clazz = clazz;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }
}
