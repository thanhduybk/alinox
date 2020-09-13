package duy.nguyen.alinox.model.dto;

import java.io.Serializable;
import java.util.List;

public class InkWiper implements Serializable {
    private Long inkWiperId;

    private Long thick;

    private List<Long> resolutions;

    public Long getInkWiperId() {
        return inkWiperId;
    }

    public void setInkWiperId(Long inkWiperId) {
        this.inkWiperId = inkWiperId;
    }

    public Long getThick() {
        return thick;
    }

    public void setThick(Long thick) {
        this.thick = thick;
    }

    public List<Long> getResolutions() {
        return resolutions;
    }

    public void setResolutions(List<Long> resolutions) {
        this.resolutions = resolutions;
    }
}
