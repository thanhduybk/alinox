package duy.nguyen.alinox.payload.response;

import java.io.Serializable;

public class MaterialResponse implements Serializable {
    private Long materialId;
    private String name;
    private Long clazzId;
    private Long createdBy;
    private String state;
    private String createdAt;
    private String updatedAt;

    private ClazzResponse clazz;

    public Long getMaterialId() {
        return materialId;
    }

    public void setMaterialId(Long materialId) {
        this.materialId = materialId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getClazzId() {
        return clazzId;
    }

    public void setClazzId(Long clazzId) {
        this.clazzId = clazzId;
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
