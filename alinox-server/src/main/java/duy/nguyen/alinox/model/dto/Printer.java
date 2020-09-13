package duy.nguyen.alinox.model.dto;

public class Printer {
    private Long printerId;

    private String name;

    private Long printUnit;

    private RollSize rollSize;

    public Long getPrinterId() {
        return printerId;
    }

    public void setPrinterId(Long printerId) {
        this.printerId = printerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPrintUnit() {
        return printUnit;
    }

    public void setPrintUnit(Long printUnit) {
        this.printUnit = printUnit;
    }

    public RollSize getRollSize() {
        return rollSize;
    }

    public void setRollSize(RollSize rollSize) {
        this.rollSize = rollSize;
    }
}
