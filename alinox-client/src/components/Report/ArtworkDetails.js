import React from "react";
import PropTypes from "prop-types";

const ArtworkDetails = ({ artworkInstance }) => {
	const { artwork } = artworkInstance;

	return (
		<div className="artwork-report-item">
			<div className="artwork-report-line">{artworkInstance.aniloxAxis}</div>
			<div className="artwork-report-line">{artworkInstance.color}</div>
			<div
				className="artwork-report-line"
				style={{ height: 62, display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				{artwork.propertyName}
			</div>
			<div className="artwork-report-line">{artwork.aniloxResolution}</div>
			<div className="artwork-report-line">{artwork.inkVolume}</div>
			<div className="artwork-report-line">{artwork.openDegree}</div>
			<div className="artwork-report-line">{artwork.thickDegree}</div>
			<div className="artwork-report-line">{artwork.angle}</div>
			<div className="artwork-report-line">{artwork.shape}</div>
			<div className="artwork-report-line">{artwork.cellDepth}</div>
			<div className="artwork-report-line">{artwork.doPercent}</div>
			<div className="artwork-report-line">{artwork.wiper.thick}</div>
		</div>
	);
};

ArtworkDetails.propTypes = {
	artworkInstance: PropTypes.shape({
		artworkInstanceId: PropTypes.number.isRequired,
		artwork: PropTypes.object.isRequired,
		aniloxAxis: PropTypes.number.isRequired,
		color: PropTypes.string.isRequired
	}).isRequired,
};

export default ArtworkDetails;