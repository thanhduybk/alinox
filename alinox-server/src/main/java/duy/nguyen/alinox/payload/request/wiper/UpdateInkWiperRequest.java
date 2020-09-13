package duy.nguyen.alinox.payload.request.wiper;

import javax.validation.constraints.NotNull;

public class UpdateInkWiperRequest {
    @NotNull
    private Integer thick;
    @NotNull
    private Integer resolution;

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
}
