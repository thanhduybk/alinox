package duy.nguyen.alinox.payload.util;

import duy.nguyen.alinox.model.InkWiperEntity;
import duy.nguyen.alinox.payload.response.InkWiperResponse;

import java.time.format.DateTimeFormatter;

public class InkWiperBeanUtil {
    public static InkWiperResponse convert2Dto(InkWiperEntity entity) {
        InkWiperResponse inkWiperResponse = new InkWiperResponse();
        inkWiperResponse.setInkWiperId(entity.getInkWiperId());
        inkWiperResponse.setThick(entity.getThick());
        inkWiperResponse.setResolution(entity.getResolution());
        inkWiperResponse.setCreatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(entity.getCreatedAt()));
        inkWiperResponse.setUpdatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(entity.getUpdatedAt()));
        inkWiperResponse.setCreatedBy(entity.getEmployee() != null ? entity.getEmployee().getEmployeeId() : null);
        inkWiperResponse.setState(entity.getState());

        return inkWiperResponse;
    }
}
