import React from "react";

const ArtworkMeta = () => {
	return (
		<div className="artwork-report-item-meta">
			<div className="artwork-report-meta-line">No.</div>
			<div className="artwork-report-meta-line">Color</div>
			<div
				className="artwork-report-meta-line"
				style={{ height: 62, display: "flex", alignItems: "center" }}
			>
				Typical Printing
			</div>
			<div className="artwork-report-meta-line">Anilox Line Screen</div>
			<div className="artwork-report-meta-line">Anilox Volume (BCM)</div>
			<div className="artwork-report-meta-line">Opening</div>
			<div className="artwork-report-meta-line">Wall</div>
			<div className="artwork-report-meta-line">Anilox Angle</div>
			<div className="artwork-report-meta-line">Anilox Shape</div>
			<div className="artwork-report-meta-line">Depth Cell</div>
			<div className="artwork-report-meta-line">D,O (%)</div>
			<div className="artwork-report-meta-line">Doctor Blades</div>
		</div>
	);
};

export default ArtworkMeta;