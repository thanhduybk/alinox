package duy.nguyen.alinox.controller;

import duy.nguyen.alinox.payload.request.artwork.UpdateArtworkRequest;
import duy.nguyen.alinox.payload.response.ResponseBuilder;
import duy.nguyen.alinox.security.Current;
import duy.nguyen.alinox.security.MyUserDetails;
import duy.nguyen.alinox.service.ArtworkService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ArtworkController {
    private final ArtworkService artworkService;

    public ArtworkController(ArtworkService artworkService) {
        this.artworkService = artworkService;
    }

    @GetMapping(path = "/artworks")
    public ResponseEntity<?> listArtworks(@Current MyUserDetails me) {
        if (me == null) {
            return ResponseEntity.ok(ResponseBuilder.build(artworkService.findAllBuiltIn()));
        }

        return ResponseEntity.ok(ResponseBuilder.build(artworkService.listArtworks(me.getEmployeeId())));
    }

    @PutMapping(path = "/artworks/{id}")
    public ResponseEntity<?> updateArtwork(@PathVariable("id") Long artworkId, @RequestBody UpdateArtworkRequest request, @Current MyUserDetails me) {
        return ResponseEntity.ok(ResponseBuilder.build(artworkService.updateArtwork(artworkId, request, me)));
    }
}
