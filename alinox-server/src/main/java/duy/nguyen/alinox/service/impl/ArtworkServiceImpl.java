package duy.nguyen.alinox.service.impl;


import duy.nguyen.alinox.exception.BadRequestException;
import duy.nguyen.alinox.model.ArtworkEntity;
import duy.nguyen.alinox.model.InkWiperEntity;
import duy.nguyen.alinox.payload.request.artwork.UpdateArtworkRequest;
import duy.nguyen.alinox.payload.response.ArtworkResponse;
import duy.nguyen.alinox.payload.util.ArtworkBeanUtil;
import duy.nguyen.alinox.repository.ArtworkRepository;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.ArtworkService;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static duy.nguyen.alinox.service.common.Constants.STATE_UPDATE;

@Service
@Transactional
public class ArtworkServiceImpl implements ArtworkService {
    private final ArtworkRepository artworkRepository;

    public ArtworkServiceImpl(ArtworkRepository artworkRepository) {
        this.artworkRepository = artworkRepository;
    }

    @Override
    public ArtworkResponse updateArtwork(Long artworkId, UpdateArtworkRequest request, MyUserDetails me) {
        ArtworkEntity originalArtwork = artworkRepository.findByIdFetchClazz(artworkId)
                .orElseThrow(() -> new BadRequestException("Artwork not found with id " + artworkId));

        validatePayload(request, originalArtwork);

        if (StringUtils.isBlank(originalArtwork.getState())) {
            ArtworkEntity updateArtwork = new ArtworkEntity();

            updateArtwork.setPropertyName(originalArtwork.getPropertyName());
            updateArtwork.setInkVolume(request.getInkVolume() != null ? request.getInkVolume() : originalArtwork.getInkVolume());
            updateArtwork.setMaxInkVolume(originalArtwork.getMaxInkVolume());
            updateArtwork.setMinInkVolume(originalArtwork.getMinInkVolume());
            updateArtwork.setAlinoxResolution(originalArtwork.getAlinoxResolution());
            updateArtwork.setOpenDegree(request.getOpenDegree() != null ? request.getOpenDegree() : originalArtwork.getOpenDegree());
            updateArtwork.setThickDegree(request.getThickDegree() != null ? request.getThickDegree() : originalArtwork.getThickDegree());
            updateArtwork.setAngle(request.getAngle() != null ? request.getAngle() : originalArtwork.getAngle());
            updateArtwork.setShape(StringUtils.isNotBlank(request.getShape()) ? request.getShape() : originalArtwork.getShape());
            updateArtwork.setCellDepth(request.getCellDepth() != null ? request.getCellDepth() : originalArtwork.getCellDepth());
            updateArtwork.setMaxCellDepth(originalArtwork.getMaxCellDepth());
            updateArtwork.setMinCellDepth(originalArtwork.getMinCellDepth());
            updateArtwork.setDO(request.getDoPercent() != null ? request.getDoPercent() : originalArtwork.getDO());
            updateArtwork.setWiper(originalArtwork.getWiper());
            updateArtwork.setClazz(originalArtwork.getClazz());

            InkWiperEntity inkWiper = originalArtwork.getWiper();
            inkWiper.setThick(request.getWiperThick());

            updateArtwork.setWiper(inkWiper);

            updateArtwork.setEmployee(me.getRef());
            updateArtwork.setState(STATE_UPDATE);
            updateArtwork.setOriginal(originalArtwork);

            return ArtworkBeanUtil.convert2Dto(artworkRepository.save(updateArtwork));
        } else {
            if (!originalArtwork.getEmployee().getEmployeeId().equals(me.getEmployeeId())) {
                throw new BadRequestException("FORBIDDEN: Cannot update this artwork");
            } else {
                originalArtwork.setInkVolume(request.getInkVolume() != null ? request.getInkVolume() : originalArtwork.getInkVolume());

                originalArtwork.setOpenDegree(request.getOpenDegree() != null ? request.getOpenDegree() : originalArtwork.getOpenDegree());
                originalArtwork.setThickDegree(request.getThickDegree() != null ? request.getThickDegree() : originalArtwork.getThickDegree());
                originalArtwork.setAngle(request.getAngle() != null ? request.getAngle() : originalArtwork.getAngle());
                originalArtwork.setShape(StringUtils.isNotBlank(request.getShape()) ? request.getShape() : originalArtwork.getShape());
                originalArtwork.setCellDepth(request.getCellDepth() != null ? request.getCellDepth() : originalArtwork.getCellDepth());
                originalArtwork.setDO(request.getDoPercent() != null ? request.getDoPercent() : originalArtwork.getDO());
                originalArtwork.getWiper().setThick(request.getWiperThick());

                return ArtworkBeanUtil.convert2Dto(artworkRepository.save(originalArtwork));
            }
        }
    }

    private void validatePayload(UpdateArtworkRequest request, ArtworkEntity originalArtwork) {
        if (request.getInkVolume() != null) {
            if (request.getInkVolume() < originalArtwork.getMinInkVolume() || request.getInkVolume() > originalArtwork.getMaxInkVolume()) {
                throw new BadRequestException("Invalid ink volume");
            }
        }

        if (request.getCellDepth() != null) {
            if (request.getCellDepth() < originalArtwork.getMinCellDepth() || request.getCellDepth() > originalArtwork.getMaxCellDepth()) {
                throw new BadRequestException("Invalid cell depth");
            }
        }

        if (request.getDoPercent() != null) {
            if (request.getDoPercent() <= 0 || request.getDoPercent() > 100) {
                throw new BadRequestException("Invalid DO");
            }
        }

        if (request.getAngle() != null) {
            if (request.getAngle() <= 0 || request.getAngle() > 180) {
                throw new BadRequestException("Invalid angle");
            }
        }
    }

    @Override
    public List<ArtworkResponse> listArtworks(Long customerId) {
        List<ArtworkEntity> artworks = artworkRepository.findAll();

        List<ArtworkEntity> builtInArtworks = artworks.stream()
                .filter(m -> StringUtils.isBlank(m.getState()))
                .collect(Collectors.toList());

        List<ArtworkEntity> myUpdatedArtworks = artworks.stream()
                .filter(m -> STATE_UPDATE.equals(m.getState()) && m.getEmployee().getEmployeeId().equals(customerId))
                .collect(Collectors.toList());

        List<Long> myUpdatedArtworkIds = myUpdatedArtworks.stream()
                .map(m -> m.getOriginal().getArtworkId())
                .collect(Collectors.toList());

        List<ArtworkEntity> customerArtworks = new ArrayList<>();

        customerArtworks.addAll(myUpdatedArtworks);
        customerArtworks.addAll(builtInArtworks.stream()
                .filter(m -> !myUpdatedArtworkIds.contains(m.getArtworkId()))
                .collect(Collectors.toList()));

        customerArtworks.sort((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()));

        return customerArtworks.stream().map(ArtworkBeanUtil::convert2Dto).collect(Collectors.toList());
    }

    @Override
    public List<ArtworkResponse> findAllBuiltIn() {
        return artworkRepository.findAllByStateIsNull().stream().map(ArtworkBeanUtil::convert2Dto).collect(Collectors.toList());
    }
}
