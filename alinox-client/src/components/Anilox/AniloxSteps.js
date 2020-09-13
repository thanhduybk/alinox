import React from "react";
import PropTypes from "prop-types";
import { Steps } from "antd";

const steps = [
	{ title: "Step 1", description: "Information of Customer" },
	{ title: "Step 2", description: "Typical Printing & Material" },
	{ title: "Step 3", description: "Printer & Colors" },
	{ title: "Step 4", description: "Artworks" },
	{ title: "Step 5", description: "Confirm & Save" }
];

const AniloxSteps = ({ current }) => {
	return (
		<div className="anilox-steps">
			<div className="step-bar">
				<Steps className="step-items" current={current}>
					{steps.map(step => (
						<Steps.Step
							className="step-item" title={step.title} key={step.title}
							description={step.description}
						/>
					))}
				</Steps>
			</div>
		</div>
	);
};

AniloxSteps.propTypes = {
	current: PropTypes.number.isRequired
};

export default AniloxSteps;