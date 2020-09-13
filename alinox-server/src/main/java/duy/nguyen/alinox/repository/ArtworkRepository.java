package duy.nguyen.alinox.repository;

import duy.nguyen.alinox.model.ArtworkEntity;
import duy.nguyen.alinox.model.ClazzEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface ArtworkRepository extends JpaRepository<ArtworkEntity, Long> {
    @Query("SELECT a FROM ArtworkEntity a JOIN FETCH a.clazz WHERE a.artworkId = :id")
    Optional<ArtworkEntity> findByIdFetchClazz(@Param("id") Long artworkId);

    Optional<ArtworkEntity> findByClazzAndPropertyName(ClazzEntity clazz, String propName);

    List<ArtworkEntity> findAllByClazzAndArtworkIdIn(ClazzEntity clazz, Set<Long> names);

    List<ArtworkEntity> findAllByStateIsNull();
}
