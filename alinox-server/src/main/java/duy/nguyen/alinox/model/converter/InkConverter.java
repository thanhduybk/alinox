package duy.nguyen.alinox.model.converter;

import duy.nguyen.alinox.model.dto.Ink;

import javax.persistence.AttributeConverter;

public class InkConverter implements AttributeConverter<Ink, String> {
    @Override
    public String convertToDatabaseColumn(Ink ink) {
        return String.format("inkId:%d|name:%s", ink.getInkId(), ink.getName());
    }

    @Override
    public Ink convertToEntityAttribute(String s) {
        Ink ink = new Ink();

        String[] o = s.split("[:|]");

        ink.setInkId(Long.parseLong(o[1]));
        ink.setName(o[3]);

        return ink;
    }
}
