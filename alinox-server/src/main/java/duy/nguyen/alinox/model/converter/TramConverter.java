package duy.nguyen.alinox.model.converter;

import duy.nguyen.alinox.model.dto.Tram;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class TramConverter implements AttributeConverter<Tram, String> {
    @Override
    public String convertToDatabaseColumn(Tram tram) {
        return String.format("tramId:%s|name:%s", tram.getTramId().toString(), tram.getName());
    }

    @Override
    public Tram convertToEntityAttribute(String s) {
        Tram tram = new Tram();

        String[] o = s.split("[:|]");

        tram.setTramId(Long.parseLong(o[1]));
        tram.setName(o[3]);

        return tram;
    }
}
