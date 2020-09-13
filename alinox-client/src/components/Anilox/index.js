import React, { useEffect, useState } from "react";

import "./styles.scss";

import AniloxSteps from "./AniloxSteps";
import Product from "./Product";
import Material from "./Material";
import Printer from "./Printer";
import Artwork from "./Artwork";
import Preview from "./Preview";

const Anilox = () => {
	const [ current, setCurrent ] = useState(0);

	const nextStep = () => {
		setCurrent(prev => prev + 1);
	};

	const prevStep = () => {
		setCurrent(prev => prev - 1);
	};

	const cleanStep = () => {
		setCurrent(0);
	};

	useEffect(() => {
		const aniloxPage = document.querySelector(".anilox-page");

		if (current >= 3) {
			aniloxPage.style.width = "80%";
		} else {
			aniloxPage.style.width = "70%";
		}

	}, [ current ]);

	return (
		<div className="anilox-page">
			<AniloxSteps current={current}/>
			{current === 0 && <Product prevStep={prevStep} nextStep={nextStep}/>}
			{current === 1 && <Material prevStep={prevStep} nextStep={nextStep}/>}
			{current === 2 && <Printer prevStep={prevStep} nextStep={nextStep}/>}
			{current === 3 && <Artwork prevStep={prevStep} nextStep={nextStep}/>}
			{current === 4 && <Preview prevStep={prevStep} cleanStep={cleanStep}/>}
		</div>
	);
};

Anilox.propTypes = {};

export default Anilox;