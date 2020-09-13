package duy.nguyen.alinox.payload.request.report;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class ColoredArtwork implements Serializable {
    @NotBlank
    private String color;
    @NotNull
    private Integer aniloxAxis;
    @NotNull
    private Long artworkId;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getAniloxAxis() {
        return aniloxAxis;
    }

    public void setAniloxAxis(Integer aniloxAxis) {
        this.aniloxAxis = aniloxAxis;
    }

    public Long getArtworkId() {
        return artworkId;
    }

    public void setArtworkId(Long artworkId) {
        this.artworkId = artworkId;
    }
}
