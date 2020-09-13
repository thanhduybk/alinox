package duy.nguyen.alinox.service.impl;

import duy.nguyen.alinox.exception.BadRequestException;
import duy.nguyen.alinox.model.InkWiperEntity;
import duy.nguyen.alinox.payload.request.wiper.CreateInkWiperRequest;
import duy.nguyen.alinox.payload.request.wiper.UpdateInkWiperRequest;
import duy.nguyen.alinox.payload.response.InkWiperResponse;
import duy.nguyen.alinox.payload.util.InkWiperBeanUtil;
import duy.nguyen.alinox.repository.InkWiperRepository;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.InkWiperService;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static duy.nguyen.alinox.service.common.Constants.*;

@Service
@Transactional
public class InkWiperServiceImpl implements InkWiperService {
    private final InkWiperRepository inkWiperRepository;

    public InkWiperServiceImpl(InkWiperRepository inkWiperRepository) {
        this.inkWiperRepository = inkWiperRepository;
    }

    @Override
    public InkWiperResponse createInkWiper(CreateInkWiperRequest request, MyUserDetails me) {
        if (inkWiperRepository.existsByThickAndResolutionAndEmployee(request.getThick(), request.getResolution(), me.getRef())) {
            throw new BadRequestException("Wiper existed with thick " + request.getThick() + " and resolution " + request.getResolution());
        }

        InkWiperEntity wiperEntity = new InkWiperEntity();
        wiperEntity.setThick(request.getThick());
        wiperEntity.setResolution(request.getResolution());
        wiperEntity.setEmployee(me.getRef());
        wiperEntity.setState(STATE_CREATED);

        return InkWiperBeanUtil.convert2Dto(inkWiperRepository.save(wiperEntity));
    }

    @Override
    public InkWiperResponse updateInkWiper(Long wiperId, UpdateInkWiperRequest request, MyUserDetails me) {
        InkWiperEntity originalWiper = inkWiperRepository.findById(wiperId)
                .orElseThrow(() -> new BadRequestException("Wiper not found with id " + wiperId));

        if (originalWiper.getThick().equals(request.getThick()) && originalWiper.getResolution().equals(request.getResolution())) {
            throw new BadRequestException("Nothing to update");
        }

        if (StringUtils.isBlank(originalWiper.getState())) {
            InkWiperEntity updatedWiper = new InkWiperEntity();
            updatedWiper.setThick(request.getThick());
            updatedWiper.setResolution(request.getResolution());
            updatedWiper.setEmployee(me.getRef());
            updatedWiper.setState(STATE_UPDATE);
            updatedWiper.setOriginal(originalWiper);

            return InkWiperBeanUtil.convert2Dto(inkWiperRepository.save(updatedWiper));
        } else {
            if (!originalWiper.getEmployee().getEmployeeId().equals(me.getEmployeeId())) {
                throw new BadRequestException("FORBIDDEN: Cannot update this wiper");
            } else {
                originalWiper.setThick(request.getThick());
                originalWiper.setResolution(request.getResolution());

                return InkWiperBeanUtil.convert2Dto(inkWiperRepository.save(originalWiper));
            }
        }
    }

    @Override
    public void deleteInkWiper(Long wiperId, MyUserDetails me) {
        InkWiperEntity originalWiper = inkWiperRepository.findById(wiperId)
                .orElseThrow(() -> new BadRequestException("Wiper not found with id " + wiperId));

        if (StringUtils.isBlank(originalWiper.getState())) {
            InkWiperEntity wiperEntity = new InkWiperEntity();
            wiperEntity.setThick(originalWiper.getThick());
            wiperEntity.setResolution(originalWiper.getResolution());
            wiperEntity.setEmployee(me.getRef());
            wiperEntity.setState(STATE_DELETE);
            wiperEntity.setOriginal(originalWiper);

            inkWiperRepository.save(wiperEntity);
        } else {
            if (!originalWiper.getEmployee().getEmployeeId().equals(me.getEmployeeId())) {
                throw new BadRequestException("FORBIDDEN: Cannot delete this wiper");
            } else {
                inkWiperRepository.delete(originalWiper);
            }
        }
    }

    @Override
    public List<InkWiperResponse> listInkWipers(Long customerId) {
        List<InkWiperEntity> wipers = inkWiperRepository.findAll();

        List<InkWiperEntity> builtInWipers = wipers.stream()
                .filter(m -> StringUtils.isBlank(m.getState()))
                .collect(Collectors.toList());

        List<InkWiperEntity> myCreatedWipers = wipers.stream()
                .filter(m -> STATE_CREATED.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .collect(Collectors.toList());

        List<InkWiperEntity> myUpdatedWipers = wipers.stream()
                .filter(m -> STATE_UPDATE.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .collect(Collectors.toList());

        List<Long> myUpdatedWiperIds = myUpdatedWipers.stream()
                .map(m -> m.getOriginal().getInkWiperId())
                .collect(Collectors.toList());

        List<Long> myDeletedMaterialIds = wipers.stream()
                .filter(m -> STATE_DELETE.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .map(m -> m.getOriginal().getInkWiperId())
                .collect(Collectors.toList());

        List<InkWiperEntity> customerWipers = new ArrayList<>();

        customerWipers.addAll(myCreatedWipers);
        customerWipers.addAll(myUpdatedWipers);
        customerWipers.addAll(builtInWipers.stream()
                .filter(m -> !myUpdatedWiperIds.contains(m.getInkWiperId()))
                .filter(m -> !myDeletedMaterialIds.contains(m.getInkWiperId()))
                .collect(Collectors.toList()));

        customerWipers.sort((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()));

        return customerWipers.stream().map(InkWiperBeanUtil::convert2Dto).collect(Collectors.toList());
    }

    @Override
    public List<InkWiperResponse> findAllBuiltIn() {
        return inkWiperRepository.findAllByStateIsNull().stream().map(InkWiperBeanUtil::convert2Dto).collect(Collectors.toList());
    }
}
