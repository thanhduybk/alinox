package duy.nguyen.alinox.payload.util;

import duy.nguyen.alinox.model.ArtworkEntity;
import duy.nguyen.alinox.payload.response.ArtworkResponse;

import java.time.format.DateTimeFormatter;

public class ArtworkBeanUtil {
    public static ArtworkResponse convert2Dto(ArtworkEntity entity) {
        ArtworkResponse artworkResponse = new ArtworkResponse();

        artworkResponse.setArtworkId(entity.getArtworkId());
        artworkResponse.setPropertyName(entity.getPropertyName());
        artworkResponse.setInkVolume(entity.getInkVolume());
        artworkResponse.setMaxInkVolume(entity.getMaxInkVolume());
        artworkResponse.setMinInkVolume(entity.getMinInkVolume());
        artworkResponse.setAniloxResolution(entity.getAlinoxResolution());
        artworkResponse.setOpenDegree(entity.getOpenDegree());
        artworkResponse.setThickDegree(entity.getThickDegree());
        artworkResponse.setAngle(entity.getAngle());
        artworkResponse.setShape(entity.getShape());
        artworkResponse.setCellDepth(entity.getCellDepth());
        artworkResponse.setMaxCellDepth(entity.getMaxCellDepth());
        artworkResponse.setMinCellDepth(entity.getMinCellDepth());
        artworkResponse.setDoPercent(entity.getDO());
        artworkResponse.setWiper(InkWiperBeanUtil.convert2Dto(entity.getWiper()));
        artworkResponse.setClazz(ClazzBeanUtil.convert2Dto(entity.getClazz()));

        artworkResponse.setCreatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(entity.getCreatedAt()));
        artworkResponse.setUpdatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(entity.getUpdatedAt()));
        artworkResponse.setCreatedBy(entity.getEmployee() != null ? entity.getEmployee().getEmployeeId() : null);
        artworkResponse.setState(entity.getState());

        return artworkResponse;
    }
}
