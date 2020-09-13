package duy.nguyen.alinox.model.dto;

public class Ink {
    private Long inkId;

    private String name;

    public Long getInkId() {
        return inkId;
    }

    public void setInkId(Long inkId) {
        this.inkId = inkId;
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

        Ink ink = (Ink) o;

        if (!inkId.equals(ink.inkId)) return false;
        return name.equals(ink.name);
    }

    @Override
    public int hashCode() {
        int result = inkId.hashCode();
        result = 31 * result + name.hashCode();
        return result;
    }
}
