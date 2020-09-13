package duy.nguyen.alinox.service;


import duy.nguyen.alinox.payload.request.artwork.UpdateArtworkRequest;
import duy.nguyen.alinox.payload.response.ArtworkResponse;
import duy.nguyen.alinox.security.MyUserDetails;

import java.util.List;

public interface ArtworkService {
    ArtworkResponse updateArtwork(Long artworkId, UpdateArtworkRequest request, MyUserDetails me);

    List<ArtworkResponse> listArtworks(Long customerId);

    List<ArtworkResponse> findAllBuiltIn();
}
