import React, { useState } from "react";

import "./styles.scss";
import SideBar from "./SideBar";
import Clazz from "./pages/Clazz";
import Material from "./pages/Material";
import Ink from "./pages/Ink";
import Vanish from "./pages/Vanish";
import Printer from "./pages/Printer";
import PrintColor from "./pages/PrintColor";
import TramVsRoll from "./pages/TramVsRoll";
import TramVsInk from "./pages/TramVsInk";
import Graphics from "./pages/Graphics";
import Wiper from "./pages/Wiper";
import LastGuide from "./pages/LastGuide";

const Guide = () => {
	const [ current, setCurrent ] = useState(1);

	return (
		<div className="guide-page">
			<div className="guide-sidebar">
				<SideBar
					current={current}
					change={key => {
						setCurrent(key);
					}}
				/>
			</div>
			<div className="guide-content">
				{current === 1 && <Clazz/>}
				{current === 2 && <Material/>}
				{current === 3 && <Ink/>}
				{current === 4 && <Vanish/>}
				{current === 5 && <Printer/>}
				{current === 6 && <PrintColor/>}
				{current === 7 && <TramVsRoll/>}
				{current === 8 && <TramVsInk/>}
				{current === 9 && <Graphics/>}
				{current === 10 && <Wiper/>}
				{current === 11 && <LastGuide/>}
			</div>
		</div>
	);
};

export default Guide;