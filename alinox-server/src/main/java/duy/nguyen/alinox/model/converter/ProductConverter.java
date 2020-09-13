package duy.nguyen.alinox.model.converter;

import duy.nguyen.alinox.model.dto.Product;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class ProductConverter implements AttributeConverter<Product, String> {
    @Override
    public String convertToDatabaseColumn(Product product) {
        return String.format("[%s] - %s", product.getCode().trim(), product.getName().trim());
    }

    @Override
    public Product convertToEntityAttribute(String s) {
        Product product = new Product();

        String[] o = s.split("] - ", 2);

        product.setCode(o[0].substring(1));
        product.setName(o[1]);

        return product;
    }
}
