package duy.nguyen.alinox.payload.request.material;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class CreateMaterialRequest {
    @NotBlank
    private String name;
    @NotNull
    private Long clazzId;

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
}
