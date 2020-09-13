package duy.nguyen.alinox.service;

import duy.nguyen.alinox.payload.request.material.CreateMaterialRequest;
import duy.nguyen.alinox.payload.request.material.UpdateMaterialRequest;
import duy.nguyen.alinox.payload.response.MaterialResponse;
import duy.nguyen.alinox.security.MyUserDetails;

import java.util.List;

public interface MaterialService {
    MaterialResponse createMaterial(CreateMaterialRequest request, MyUserDetails me);

    MaterialResponse updateMaterial(Long materialId, UpdateMaterialRequest request, MyUserDetails me);

    void deleteMaterial(Long materialId, MyUserDetails me);

    List<MaterialResponse> listMaterials(Long customerId);

    List<MaterialResponse> findAllBuiltIn();
}
