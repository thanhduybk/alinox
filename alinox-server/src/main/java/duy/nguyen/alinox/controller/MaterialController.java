package duy.nguyen.alinox.controller;

import duy.nguyen.alinox.payload.request.material.CreateMaterialRequest;
import duy.nguyen.alinox.payload.request.material.UpdateMaterialRequest;
import duy.nguyen.alinox.payload.response.ResponseBuilder;
import duy.nguyen.alinox.security.Current;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.MaterialService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class MaterialController {
    private final MaterialService materialService;

    public MaterialController(MaterialService materialService) {
        this.materialService = materialService;
    }

    @GetMapping(path = "/materials")
    public ResponseEntity<?> listMaterials(@Current MyUserDetails me) {
        if (me == null) {
            return ResponseEntity.ok(ResponseBuilder.build(materialService.findAllBuiltIn()));
        }

        return ResponseEntity.ok(ResponseBuilder.build(materialService.listMaterials(me.getEmployeeId())));
    }

    @PostMapping(path = "/materials")
    public ResponseEntity<?> createMaterial(@RequestBody CreateMaterialRequest request, @Current MyUserDetails me) {
        return ResponseEntity.ok(ResponseBuilder.build(materialService.createMaterial(request, me), HttpStatus.CREATED));
    }

    @PutMapping(path = "/materials/{id}")
    public ResponseEntity<?> updateMaterial(@PathVariable("id") Long materialId, @RequestBody UpdateMaterialRequest request, @Current MyUserDetails me) {
        return ResponseEntity.ok(ResponseBuilder.build(materialService.updateMaterial(materialId, request, me)));
    }

    @DeleteMapping(path = "/materials/{id}")
    public ResponseEntity<?> deleteMaterial(@PathVariable("id") Long materialId, @Current MyUserDetails me) {
        materialService.deleteMaterial(materialId, me);
        return ResponseEntity.ok(ResponseBuilder.build(null));
    }
}
