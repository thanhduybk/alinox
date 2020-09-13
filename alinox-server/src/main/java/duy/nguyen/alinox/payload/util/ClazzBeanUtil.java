package duy.nguyen.alinox.payload.util;

import duy.nguyen.alinox.model.ClazzEntity;
import duy.nguyen.alinox.payload.response.ClazzResponse;

public class ClazzBeanUtil {
    public static ClazzResponse convert2Dto(ClazzEntity entity) {
        ClazzResponse clazzResponse = new ClazzResponse();

        clazzResponse.setClazzId(entity.getClazzId());
        clazzResponse.setName(entity.getName());
        clazzResponse.setPar(entity.getPar());
        clazzResponse.setTac(entity.getTac());
        clazzResponse.setType(entity.getType());
        clazzResponse.setResolutions(entity.getResolutions());

        return clazzResponse;
    }
}
