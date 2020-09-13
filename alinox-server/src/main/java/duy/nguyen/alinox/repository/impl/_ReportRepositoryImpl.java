package duy.nguyen.alinox.repository.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import duy.nguyen.alinox.model._ReportEntity;
import duy.nguyen.alinox.repository._ReportRepository;
import org.springframework.stereotype.Repository;

import java.io.IOException;

@Repository
public class _ReportRepositoryImpl implements _ReportRepository {

    @Override
    public _ReportEntity getReport() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();

        objectMapper.registerModule(new JavaTimeModule());

        return objectMapper.readValue(data, _ReportEntity.class);
    }

    private static final String data = "{\n" +
            "\t\"createdAt\": \"2020-08-29T14:14:52.538Z\",\n" +
            "\t\"province\": \"Hồ Chí Minh\",\n" +
            "\t\"country\": \"Việt Nam\",\n" +
            "\t\"timezone\": \"GMT+7\",\n" +
            "\t\"product\": { \"name\": \"Macbook Pro 2020\", \"code\": \"MBP20\" },\n" +
            "\t\"customer\": { \"name\": \"Duy Nguyen Thanh\", \"code\": \"NTD-CSE\" },\n" +
            "\t\"clazz\": { \"clazzId\": 2, \"name\": \"Bao bì giấy (Giấy tráng phủ)\", \"type\": \"Giấy tráng phủ\" },\n" +
            "\t\"material\": { \"materialId\": 1, \"name\": \"Giấy Ford trắng\", \"clazzId\": 2 },\n" +
            "\t\"ink\": { \"inkId\": 1, \"name\": \"Mực gốc nước\" },\n" +
            "\t\"printer\": { \"printerId\": 3, \"name\": \"Gallus TCS 250\", \"rollSize\": { \"maxWidth\": 130 }, \"printUnit\": 10 },\n" +
            "\t\"numColors\": 4,\n" +
            "\t\"colors\": [ \"Y\", \"K\", \"Red\", \"Blue\" ],\n" +
            "\t\"artworkResolution\": \"133 (1)\",\n" +
            "\t\"tram\": { \"tramId\": 1, \"name\": \"AM\" },\n" +
            "\t\"tramRotation\": \"C = 7.5, K = 37.5, M = 67.5, Y = 82.5\",\n" +
            "\t\"artworks\": [ {\n" +
            "\t\t\"aniloxAxis\": 1,\n" +
            "\t\t\"color\": \"Y\",\n" +
            "\t\t\"propertyName\": \"Tram 133 (1) lpi\",\n" +
            "\t\t\"alinoxResolution\": 700,\n" +
            "\t\t\"inkVolume\": 2.3,\n" +
            "\t\t\"openDegree\": 33,\n" +
            "\t\t\"thickDegree\": 3,\n" +
            "\t\t\"angle\": 60,\n" +
            "\t\t\"shape\": \"Tổ ong Hexan\",\n" +
            "\t\t\"cellDepth\": 9,\n" +
            "\t\t\"DO\": 28,\n" +
            "\t\t\"inkWiper\": { \"inkWiperId\": 3, \"thick\": 150, \"resolutions\": [ 550, 600, 700 ] }\n" +
            "\t}, {\n" +
            "\t\t\"aniloxAxis\": 2,\n" +
            "\t\t\"color\": \"Vanish\",\n" +
            "\t\t\"propertyName\": \"Nền và varnish (DGM)\",\n" +
            "\t\t\"alinoxResolution\": 300,\n" +
            "\t\t\"inkVolume\": 7.4,\n" +
            "\t\t\"openDegree\": 79,\n" +
            "\t\t\"thickDegree\": 6,\n" +
            "\t\t\"angle\": 45,\n" +
            "\t\t\"shape\": \"Diamond\",\n" +
            "\t\t\"cellDepth\": 22,\n" +
            "\t\t\"DO\": 28,\n" +
            "\t\t\"inkWiper\": { \"inkWiperId\": 2, \"thick\": 200, \"resolutions\": [ 240, 260, 280, 300, 360, 400, 440, 500 ] }\n" +
            "\t}, {\n" +
            "\t\t\"aniloxAxis\": 3,\n" +
            "\t\t\"color\": \"red\",\n" +
            "\t\t\"propertyName\": \"Đường và chữ (DGMCS)\",\n" +
            "\t\t\"alinoxResolution\": 300,\n" +
            "\t\t\"inkVolume\": 4.5,\n" +
            "\t\t\"openDegree\": 79,\n" +
            "\t\t\"thickDegree\": 6,\n" +
            "\t\t\"angle\": 60,\n" +
            "\t\t\"shape\": \"Tổ ong Hexan\",\n" +
            "\t\t\"cellDepth\": 22,\n" +
            "\t\t\"DO\": 28,\n" +
            "\t\t\"inkWiper\": { \"inkWiperId\": 2, \"thick\": 200, \"resolutions\": [ 240, 260, 280, 300, 360, 400, 440, 500 ] }\n" +
            "\t}, {\n" +
            "\t\t\"aniloxAxis\": 4,\n" +
            "\t\t\"color\": \"K\",\n" +
            "\t\t\"propertyName\": \"Tram và nền (DGMCS)\",\n" +
            "\t\t\"alinoxResolution\": 400,\n" +
            "\t\t\"inkVolume\": 4,\n" +
            "\t\t\"openDegree\": 58,\n" +
            "\t\t\"thickDegree\": 5,\n" +
            "\t\t\"angle\": 60,\n" +
            "\t\t\"shape\": \"Tổ ong Hexan\",\n" +
            "\t\t\"cellDepth\": 16,\n" +
            "\t\t\"DO\": 28,\n" +
            "\t\t\"inkWiper\": { \"inkWiperId\": 2, \"thick\": 200, \"resolutions\": [ 240, 260, 280, 300, 360, 400, 440, 500 ] }\n" +
            "\t}, {\n" +
            "\t\t\"aniloxAxis\": 5,\n" +
            "\t\t\"color\": \"red\",\n" +
            "\t\t\"propertyName\": \"Tram và nền (DGM)\",\n" +
            "\t\t\"alinoxResolution\": 500,\n" +
            "\t\t\"inkVolume\": 4.1,\n" +
            "\t\t\"openDegree\": 47,\n" +
            "\t\t\"thickDegree\": 4,\n" +
            "\t\t\"angle\": 60,\n" +
            "\t\t\"shape\": \"Tổ ong Hexan\",\n" +
            "\t\t\"cellDepth\": 13,\n" +
            "\t\t\"DO\": 28,\n" +
            "\t\t\"inkWiper\": { \"inkWiperId\": 2, \"thick\": 200, \"resolutions\": [ 240, 260, 280, 300, 360, 400, 440, 500 ] }\n" +
            "\t} ]\n" +
            "}";


}
