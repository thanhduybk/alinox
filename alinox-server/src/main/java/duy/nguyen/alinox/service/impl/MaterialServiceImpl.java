package duy.nguyen.alinox.service.impl;

import duy.nguyen.alinox.exception.BadRequestException;
import duy.nguyen.alinox.model.ClazzEntity;
import duy.nguyen.alinox.model.MaterialEntity;
import duy.nguyen.alinox.payload.request.material.CreateMaterialRequest;
import duy.nguyen.alinox.payload.request.material.UpdateMaterialRequest;
import duy.nguyen.alinox.payload.response.MaterialResponse;
import duy.nguyen.alinox.payload.util.MaterialBeanUtil;
import duy.nguyen.alinox.repository.ClazzRepository;
import duy.nguyen.alinox.repository.MaterialRepository;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.MaterialService;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static duy.nguyen.alinox.service.common.Constants.*;

@Service
@Transactional
public class MaterialServiceImpl implements MaterialService {
    private final ClazzRepository clazzRepository;
    private final MaterialRepository materialRepository;

    public MaterialServiceImpl(ClazzRepository clazzRepository, MaterialRepository materialRepository) {
        this.clazzRepository = clazzRepository;
        this.materialRepository = materialRepository;
    }

    @Override
    public MaterialResponse createMaterial(CreateMaterialRequest request, MyUserDetails me) {
        ClazzEntity clazz = clazzRepository.findById(request.getClazzId())
                .orElseThrow(() -> new BadRequestException("Clazz not found with id " + request.getClazzId()));

        if (materialRepository.existsByNameAndClazzAndEmployee(request.getName(), clazz, me.getRef())) {
            throw new BadRequestException("Material existed with name " + request.getName());
        }

        MaterialEntity materialEntity = new MaterialEntity();
        materialEntity.setName(request.getName());
        materialEntity.setClazz(clazz);
        materialEntity.setEmployee(me.getRef());
        materialEntity.setState(STATE_CREATED);

        return MaterialBeanUtil.convert2Dto(materialRepository.save(materialEntity));
    }

    @Override
    public MaterialResponse updateMaterial(Long materialId, UpdateMaterialRequest request, MyUserDetails me) {
        MaterialEntity originalMaterial = materialRepository.findById(materialId)
                .orElseThrow(() -> new BadRequestException("Material not found with id " + materialId));

        if (originalMaterial.getName().equals(request.getName()) && originalMaterial.getClazz().getClazzId().equals(request.getClazzId())) {
            throw new BadRequestException("Nothing to update");
        }

        if (StringUtils.isBlank(originalMaterial.getState())) { // Update built-in material (Create new with state UPDATED)
            MaterialEntity updateMaterial = new MaterialEntity();
            populate(request, updateMaterial, originalMaterial.getClazz());

            updateMaterial.setEmployee(me.getRef());
            updateMaterial.setState(STATE_UPDATE);
            updateMaterial.setOriginal(originalMaterial);

            return MaterialBeanUtil.convert2Dto(materialRepository.save(updateMaterial));
        } else { // Update customized material (Update existing)
            if (!originalMaterial.getEmployee().getEmployeeId().equals(me.getEmployeeId())) {
                throw new BadRequestException("FORBIDDEN: Cannot update this material");
            } else {
                populate(request, originalMaterial, originalMaterial.getClazz());

                return MaterialBeanUtil.convert2Dto(materialRepository.save(originalMaterial));
            }
        }
    }

    private void populate(UpdateMaterialRequest request, MaterialEntity material, ClazzEntity clazz) {
        material.setName(request.getName());

        if (clazz.getClazzId().equals(request.getClazzId())) {
            material.setClazz(clazz);
        } else {
            ClazzEntity otherClazz = clazzRepository.findById(request.getClazzId())
                    .orElseThrow(() -> new BadRequestException("Clazz not found with id " + request.getClazzId()));
            material.setClazz(otherClazz);
        }
    }

    @Override
    public void deleteMaterial(Long materialId, MyUserDetails me) {
        MaterialEntity originalMaterial = materialRepository.findById(materialId)
                .orElseThrow(() -> new BadRequestException("Material not found with id " + materialId));

        if (StringUtils.isBlank(originalMaterial.getState())) { // delete built-in material (create new with state DELETED)
            MaterialEntity deletedMaterial = new MaterialEntity();

            // populate required fields
            deletedMaterial.setName(originalMaterial.getName());
            deletedMaterial.setClazz(originalMaterial.getClazz());

            deletedMaterial.setEmployee(me.getRef());
            deletedMaterial.setState(STATE_DELETE);
            deletedMaterial.setOriginal(originalMaterial);

            materialRepository.save(deletedMaterial);
        } else { // delete customized material (truly delete)
            if (!originalMaterial.getEmployee().getEmployeeId().equals(me.getEmployeeId())) {
                throw new BadRequestException("FORBIDDEN: Cannot delete this material");
            } else {
                materialRepository.delete(originalMaterial);
            }
        }
    }

    @Override
    public List<MaterialResponse> listMaterials(Long customerId) {
        List<MaterialEntity> materials = materialRepository.findAll();

        List<MaterialEntity> builtInMaterials = materials.stream()
                .filter(m -> StringUtils.isBlank(m.getState()))
                .collect(Collectors.toList());

        List<MaterialEntity> myCreatedMaterials = materials.stream()
                .filter(m -> STATE_CREATED.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .collect(Collectors.toList());

        List<MaterialEntity> myUpdatedMaterials = materials.stream()
                .filter(m -> STATE_UPDATE.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .collect(Collectors.toList());

        List<Long> myUpdatedMaterialIds = myUpdatedMaterials.stream()
                .map(m -> m.getOriginal().getMaterialId())
                .collect(Collectors.toList());

        List<Long> myDeletedMaterialIds = materials.stream()
                .filter(m -> STATE_DELETE.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .map(m -> m.getOriginal().getMaterialId())
                .collect(Collectors.toList());

        List<MaterialEntity> customerMaterials = new ArrayList<>();

        customerMaterials.addAll(myCreatedMaterials);
        customerMaterials.addAll(myUpdatedMaterials);
        customerMaterials.addAll(builtInMaterials.stream()
                .filter(m -> !myUpdatedMaterialIds.contains(m.getMaterialId()))
                .filter(m -> !myDeletedMaterialIds.contains(m.getMaterialId()))
                .collect(Collectors.toList()));

        customerMaterials.sort((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()));

        return customerMaterials.stream().map(MaterialBeanUtil::convert2Dto).collect(Collectors.toList());
    }

    @Override
    public List<MaterialResponse> findAllBuiltIn() {
        return materialRepository.findAllByStateIsNull().stream().map(MaterialBeanUtil::convert2Dto).collect(Collectors.toList());
    }
}
