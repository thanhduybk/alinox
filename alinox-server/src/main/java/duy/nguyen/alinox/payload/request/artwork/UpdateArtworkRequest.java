package duy.nguyen.alinox.payload.request.artwork;

import javax.validation.constraints.NotNull;

public class UpdateArtworkRequest {
    @NotNull
    private Double inkVolume;
    @NotNull
    private Integer openDegree;
    @NotNull
    private Integer thickDegree;
    @NotNull
    private Integer cellDepth;
    @NotNull
    private Integer doPercent;
    @NotNull
    private Integer angle;
    @NotNull
    private String shape;
    @NotNull
    private Integer wiperThick;

    public Double getInkVolume() {
        return inkVolume;
    }

    public void setInkVolume(Double inkVolume) {
        this.inkVolume = inkVolume;
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

    public Integer getCellDepth() {
        return cellDepth;
    }

    public void setCellDepth(Integer cellDepth) {
        this.cellDepth = cellDepth;
    }

    public Integer getDoPercent() {
        return doPercent;
    }

    public void setDoPercent(Integer doPercent) {
        this.doPercent = doPercent;
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

    public Integer getWiperThick() {
        return wiperThick;
    }

    public void setWiperThick(Integer wiperThick) {
        this.wiperThick = wiperThick;
    }
}
