package duy.nguyen.alinox.payload.response;

import java.io.Serializable;

public class ArtworkInstanceResponse implements Serializable {
    private Long artworkInstanceId;
    private ArtworkResponse artwork;
    private Integer aniloxAxis;
    private String color;

    public Long getArtworkInstanceId() {
        return artworkInstanceId;
    }

    public void setArtworkInstanceId(Long artworkInstanceId) {
        this.artworkInstanceId = artworkInstanceId;
    }

    public ArtworkResponse getArtwork() {
        return artwork;
    }

    public void setArtwork(ArtworkResponse artwork) {
        this.artwork = artwork;
    }

    public Integer getAniloxAxis() {
        return aniloxAxis;
    }

    public void setAniloxAxis(Integer aniloxAxis) {
        this.aniloxAxis = aniloxAxis;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
