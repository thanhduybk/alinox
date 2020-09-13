package duy.nguyen.alinox.payload.response;

import java.io.Serializable;

public class InkWiperResponse implements Serializable {
    private Long inkWiperId;
    private Integer thick;
    private Integer resolution;
    private Long createdBy;
    private String state;
    private String createdAt;
    private String updatedAt;

    public Long getInkWiperId() {
        return inkWiperId;
    }

    public void setInkWiperId(Long inkWiperId) {
        this.inkWiperId = inkWiperId;
    }

    public Integer getThick() {
        return thick;
    }

    public void setThick(Integer thick) {
        this.thick = thick;
    }

    public Integer getResolution() {
        return resolution;
    }

    public void setResolution(Integer resolution) {
        this.resolution = resolution;
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
