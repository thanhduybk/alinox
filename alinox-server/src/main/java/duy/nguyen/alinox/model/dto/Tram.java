package duy.nguyen.alinox.model.dto;

public class Tram {
    private Long tramId;

    private String name;

    public Long getTramId() {
        return tramId;
    }

    public void setTramId(Long tramId) {
        this.tramId = tramId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Tram tram = (Tram) o;

        if (!tramId.equals(tram.tramId)) return false;
        return name.equals(tram.name);
    }

    @Override
    public int hashCode() {
        int result = tramId.hashCode();
        result = 31 * result + name.hashCode();
        return result;
    }
}
