package duy.nguyen.alinox.model.converter;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Converter
public class ListConverter implements AttributeConverter<List<String>, String> {
    @Override
    public String convertToDatabaseColumn(List<String> strings) {
        return strings.stream().map(Object::toString).collect(Collectors.joining(","));
    }

    @Override
    public List<String> convertToEntityAttribute(String s) {
        String[] o = s.split(",");

        return Arrays.asList(o);
    }
}
