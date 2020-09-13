package duy.nguyen.alinox.payload.util;

import duy.nguyen.alinox.model.ArtworkInstanceEntity;
import duy.nguyen.alinox.payload.response.ArtworkInstanceResponse;

public class ArtworkInstanceBeanUtil {
    public static ArtworkInstanceResponse convert2Dto(ArtworkInstanceEntity entity) {
        ArtworkInstanceResponse artworkInstanceResponse = new ArtworkInstanceResponse();

        artworkInstanceResponse.setArtworkInstanceId(entity.getArtworkInstanceId());
        artworkInstanceResponse.setArtwork(ArtworkBeanUtil.convert2Dto(entity.getArtwork()));
        artworkInstanceResponse.setAniloxAxis(entity.getAniloxAxis());
        artworkInstanceResponse.setColor(entity.getColor());

        return artworkInstanceResponse;
    }
}
