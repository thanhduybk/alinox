package duy.nguyen.alinox.payload.util;

import duy.nguyen.alinox.model.PrinterEntity;
import duy.nguyen.alinox.payload.response.PrinterResponse;

import java.time.format.DateTimeFormatter;

public class PrinterBeanUtil {
    public static PrinterResponse convert2Dto(PrinterEntity entity) {
        PrinterResponse printerResponse = new PrinterResponse();

        printerResponse.setPrinterId(entity.getPrinterId());
        printerResponse.setName(entity.getName());

        printerResponse.setMaxPh(entity.getMaxPrintSizeHeight());
        printerResponse.setMinPh(entity.getMinPrintSizeHeight());

        printerResponse.setMaxPw(entity.getMaxPrintSizeWidth());
        printerResponse.setMinPw(entity.getMinPrintSizeWidth());

        printerResponse.setMaxRh(entity.getMaxRollSizeHeight());
        printerResponse.setMinRh(entity.getMinRollSizeHeight());

        printerResponse.setMaxRw(entity.getMaxRollSizeWidth());
        printerResponse.setMinRw(entity.getMinRollSizeWidth());

        printerResponse.setPrintUnit(entity.getPrintUnit());

        printerResponse.setCreatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(entity.getCreatedAt()));
        printerResponse.setCreatedBy(entity.getEmployee() != null ? entity.getEmployee().getEmployeeId() : null);
        printerResponse.setState(entity.getState());

        printerResponse.setUpdatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(entity.getUpdatedAt()));

        return printerResponse;
    }
}
