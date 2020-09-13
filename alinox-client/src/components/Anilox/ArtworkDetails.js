import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const ArtworkDetails = ({ artwork }) => {
	const artworks = useSelector(state => state.artwork.artworks);

	const selectedArtwork = artworks.find(a => a.artworkId === artwork.artworkId);

	return (
		<div className="artwork-report-item">
			<div className="artwork-report-line">{artwork.aniloxAxis}</div>
			<div className="artwork-report-line">{artwork.color}</div>
			<div
				className="artwork-report-line"
				style={{ height: 62, display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				{selectedArtwork.propertyName}
			</div>
			<div className="artwork-report-line">{selectedArtwork.aniloxResolution}</div>
			<div className="artwork-report-line">{selectedArtwork.inkVolume}</div>
			<div className="artwork-report-line">{selectedArtwork.openDegree}</div>
			<div className="artwork-report-line">{selectedArtwork.thickDegree}</div>
			<div className="artwork-report-line">{selectedArtwork.angle}</div>
			<div className="artwork-report-line">{selectedArtwork.shape}</div>
			<div className="artwork-report-line">{selectedArtwork.cellDepth}</div>
			<div className="artwork-report-line">{selectedArtwork.doPercent}</div>
			<div className="artwork-report-line">{selectedArtwork.wiper.thick}</div>
		</div>
	);
};

ArtworkDetails.propTypes = {
	artwork: PropTypes.object.isRequired,
};

export default ArtworkDetails;