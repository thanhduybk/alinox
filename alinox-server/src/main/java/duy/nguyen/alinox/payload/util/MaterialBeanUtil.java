package duy.nguyen.alinox.payload.util;

import duy.nguyen.alinox.model.MaterialEntity;
import duy.nguyen.alinox.payload.response.MaterialResponse;

import java.time.format.DateTimeFormatter;

public class MaterialBeanUtil {
    public static MaterialResponse convert2Dto(MaterialEntity entity) {
        MaterialResponse materialResponse = new MaterialResponse();
        materialResponse.setMaterialId(entity.getMaterialId());
        materialResponse.setName(entity.getName());
        materialResponse.setClazzId(entity.getClazz().getClazzId());

        materialResponse.setCreatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(entity.getCreatedAt()));
        materialResponse.setCreatedBy(entity.getEmployee() != null ? entity.getEmployee().getEmployeeId() : null);
        materialResponse.setState(entity.getState());

        materialResponse.setClazz(ClazzBeanUtil.convert2Dto(entity.getClazz()));
        materialResponse.setUpdatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(entity.getUpdatedAt()));

        return materialResponse;
    }
}
