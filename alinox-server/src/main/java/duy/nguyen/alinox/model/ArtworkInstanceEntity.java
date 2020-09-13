package duy.nguyen.alinox.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "artwork_instance")
public class ArtworkInstanceEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long artworkInstanceId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "report_id", nullable = false)
    private ReportEntity report;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "artwork_id", nullable = false)
    private ArtworkEntity artwork;

    @Column(nullable = false)
    private Integer aniloxAxis;

    @Column(nullable = false)
    private String color;

    public Long getArtworkInstanceId() {
        return artworkInstanceId;
    }

    public void setArtworkInstanceId(Long artworkInstanceId) {
        this.artworkInstanceId = artworkInstanceId;
    }

    public ReportEntity getReport() {
        return report;
    }

    public void setReport(ReportEntity report) {
        this.report = report;
    }

    public ArtworkEntity getArtwork() {
        return artwork;
    }

    public void setArtwork(ArtworkEntity artwork) {
        this.artwork = artwork;
    }

    public Integer getAniloxAxis() {
        return aniloxAxis;
    }

    public void setAniloxAxis(Integer alinoxAxis) {
        this.aniloxAxis = alinoxAxis;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
