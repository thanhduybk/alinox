package duy.nguyen.alinox.service.impl;

import duy.nguyen.alinox.exception.BadRequestException;
import duy.nguyen.alinox.model.PrinterEntity;
import duy.nguyen.alinox.payload.request.printer.CreatePrinterRequest;
import duy.nguyen.alinox.payload.request.printer.UpdatePrinterRequest;
import duy.nguyen.alinox.payload.response.PrinterResponse;
import duy.nguyen.alinox.payload.util.PrinterBeanUtil;
import duy.nguyen.alinox.repository.PrinterRepository;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.PrinterService;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static duy.nguyen.alinox.service.common.Constants.*;

@Service
public class PrinterServiceImpl implements PrinterService {
    private final PrinterRepository printerRepository;

    public PrinterServiceImpl(PrinterRepository printerRepository) {
        this.printerRepository = printerRepository;
    }

    @Override
    public PrinterResponse createPrinter(CreatePrinterRequest request, MyUserDetails me) {
        if (printerRepository.existsByNameAndEmployee(request.getName(), me.getRef())) {
            throw new BadRequestException("Printer existed with name " + request.getName());
        }

        PrinterEntity printerEntity = new PrinterEntity();
        printerEntity.setName(request.getName());
        printerEntity.setPrintUnit(request.getPrintUnit());

        printerEntity.setMaxPrintSizeHeight(request.getMaxPrintSizeHeight());
        printerEntity.setMinPrintSizeHeight(request.getMinPrintSizeHeight());

        printerEntity.setMaxPrintSizeWidth(request.getMaxPrintSizeWidth());
        printerEntity.setMinPrintSizeWidth(request.getMinPrintSizeWidth());

        printerEntity.setMaxRollSizeHeight(request.getMaxRollSizeHeight());
        printerEntity.setMinRollSizeHeight(request.getMinRollSizeHeight());

        printerEntity.setMaxRollSizeWidth(request.getMaxRollSizeWidth());
        printerEntity.setMinRollSizeWidth(request.getMinRollSizeWidth());

        printerEntity.setEmployee(me.getRef());
        printerEntity.setState(STATE_CREATED);

        return PrinterBeanUtil.convert2Dto(printerRepository.save(printerEntity));
    }

    @Override
    public PrinterResponse updatePrinter(Long printerId, UpdatePrinterRequest request, MyUserDetails me) {
        PrinterEntity originalPrinter = printerRepository.findById(printerId)
                .orElseThrow(() -> new BadRequestException("Printer not found with id " + printerId));

        validatePayload(request, originalPrinter);

        if (StringUtils.isBlank(originalPrinter.getState())) { // Update built-in printer (Create new with state UPDATED)
            PrinterEntity updatePrinter = new PrinterEntity();
            populate(request, updatePrinter);

            updatePrinter.setEmployee(me.getRef());
            updatePrinter.setState(STATE_UPDATE);
            updatePrinter.setOriginal(originalPrinter);

            return PrinterBeanUtil.convert2Dto(printerRepository.save(updatePrinter));
        } else { // Update customized material (Update existing)
            if (!originalPrinter.getEmployee().getEmployeeId().equals(me.getEmployeeId())) {
                throw new BadRequestException("FORBIDDEN: Cannot update this printer");
            } else {
                populate(request, originalPrinter);

                return PrinterBeanUtil.convert2Dto(printerRepository.save(originalPrinter));
            }
        }
    }

    private void validatePayload(UpdatePrinterRequest request, PrinterEntity originalPrinter) {

    }

    private void populate(UpdatePrinterRequest request, PrinterEntity printer) {
        printer.setName(request.getName());
        printer.setPrintUnit(request.getPrintUnit());

        printer.setMaxRollSizeWidth(request.getMaxRollSizeWidth());
        printer.setMinRollSizeWidth(request.getMinRollSizeWidth() != null ? request.getMinRollSizeWidth() : printer.getMaxRollSizeWidth());

        printer.setMaxRollSizeHeight(request.getMaxRollSizeHeight() != null ? request.getMaxRollSizeHeight() : printer.getMaxRollSizeHeight());
        printer.setMinRollSizeHeight(request.getMinRollSizeHeight() != null ? request.getMinRollSizeHeight() : printer.getMinRollSizeHeight());

        printer.setMaxPrintSizeWidth(request.getMaxPrintSizeWidth() != null ? request.getMaxPrintSizeWidth() : printer.getMaxPrintSizeWidth());
        printer.setMinPrintSizeWidth(request.getMinPrintSizeWidth() != null ? request.getMinPrintSizeWidth() : printer.getMinPrintSizeWidth());

        printer.setMaxPrintSizeHeight(request.getMaxPrintSizeHeight() != null ? request.getMaxPrintSizeHeight() : printer.getMaxPrintSizeHeight());
        printer.setMinPrintSizeHeight(request.getMinPrintSizeHeight() != null ? request.getMinPrintSizeHeight() : printer.getMinPrintSizeHeight());
    }

    @Override
    public void deletePrinter(Long printerId, MyUserDetails me) {
        PrinterEntity originalPrinter = printerRepository.findById(printerId)
                .orElseThrow(() -> new BadRequestException("Printer not found with id " + printerId));

        if (StringUtils.isBlank(originalPrinter.getState())) { // delete built-in material (create new with state DELETED)
            PrinterEntity deletedMaterial = new PrinterEntity();

            // populate required fields
            deletedMaterial.setName(originalPrinter.getName());
            deletedMaterial.setMaxRollSizeWidth(originalPrinter.getMaxRollSizeWidth());
            deletedMaterial.setPrintUnit(originalPrinter.getPrintUnit());

            deletedMaterial.setEmployee(me.getRef());
            deletedMaterial.setState(STATE_DELETE);
            deletedMaterial.setOriginal(originalPrinter);

            printerRepository.save(deletedMaterial);
        } else { // delete customized material (truly delete)
            if (!originalPrinter.getEmployee().getEmployeeId().equals(me.getEmployeeId())) {
                throw new BadRequestException("FORBIDDEN: Cannot delete this printer");
            } else {
                printerRepository.delete(originalPrinter);
            }
        }
    }

    @Override
    public List<PrinterResponse> listPrinters(Long customerId) {
        List<PrinterEntity> printers = printerRepository.findAll();

        List<PrinterEntity> builtInPrinters = printers.stream()
                .filter(m -> StringUtils.isBlank(m.getState()))
                .collect(Collectors.toList());

        List<PrinterEntity> myCreatedPrinters = printers.stream()
                .filter(m -> STATE_CREATED.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .collect(Collectors.toList());

        List<PrinterEntity> myUpdatedPrinters = printers.stream()
                .filter(m -> STATE_UPDATE.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .collect(Collectors.toList());

        List<Long> myUpdatedMaterialIds = myUpdatedPrinters.stream()
                .map(m -> m.getOriginal().getPrinterId())
                .collect(Collectors.toList());

        List<Long> myDeletedMaterialIds = printers.stream()
                .filter(m -> STATE_DELETE.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .map(m -> m.getOriginal().getPrinterId())
                .collect(Collectors.toList());

        List<PrinterEntity> customerPrinters = new ArrayList<>();

        customerPrinters.addAll(myCreatedPrinters);
        customerPrinters.addAll(myUpdatedPrinters);
        customerPrinters.addAll(builtInPrinters.stream()
                .filter(m -> !myUpdatedMaterialIds.contains(m.getPrinterId()))
                .filter(m -> !myDeletedMaterialIds.contains(m.getPrinterId()))
                .collect(Collectors.toList()));

        customerPrinters.sort((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()));

        return customerPrinters.stream().map(PrinterBeanUtil::convert2Dto).collect(Collectors.toList());
    }

    @Override
    public List<PrinterResponse> listAllBuiltIn() {
        return printerRepository.findAllByStateIsNull().stream().map(PrinterBeanUtil::convert2Dto).collect(Collectors.toList());
    }
}
