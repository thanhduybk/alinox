package duy.nguyen.alinox.model;

import duy.nguyen.alinox.model.dto.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

public class _ReportEntity implements Serializable {
    private LocalDate createdAt;

    private String province;

    private String country;

    private String timezone;

    private Product product;

    private EmployeeEntity customer;

    private Clazz clazz;

    private Material material;

    private Ink ink;

    private Printer printer;

    private Long numColors;

    private List<String> colors;

    private String artworkResolution;

    private Tram tram;

    private String tramRotation;

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public EmployeeEntity getCustomer() {
        return customer;
    }

    public void setCustomer(EmployeeEntity customer) {
        this.customer = customer;
    }

    public Clazz getClazz() {
        return clazz;
    }

    public void setClazz(Clazz clazz) {
        this.clazz = clazz;
    }

    public Material getMaterial() {
        return material;
    }

    public void setMaterial(Material material) {
        this.material = material;
    }

    public Ink getInk() {
        return ink;
    }

    public void setInk(Ink ink) {
        this.ink = ink;
    }

    public Printer getPrinter() {
        return printer;
    }

    public void setPrinter(Printer printer) {
        this.printer = printer;
    }

    public Long getNumColors() {
        return numColors;
    }

    public void setNumColors(Long numColors) {
        this.numColors = numColors;
    }

    public List<String> getColors() {
        return colors;
    }

    public void setColors(List<String> colors) {
        this.colors = colors;
    }

    public String getArtworkResolution() {
        return artworkResolution;
    }

    public void setArtworkResolution(String artworkResolution) {
        this.artworkResolution = artworkResolution;
    }

    public Tram getTram() {
        return tram;
    }

    public void setTram(Tram tram) {
        this.tram = tram;
    }

    public String getTramRotation() {
        return tramRotation;
    }

    public void setTramRotation(String tramRotation) {
        this.tramRotation = tramRotation;
    }

    public List<Artwork> getArtworks() {
        return artworks;
    }

    public void setArtworks(List<Artwork> artworks) {
        this.artworks = artworks;
    }

    private List<Artwork> artworks;
}
