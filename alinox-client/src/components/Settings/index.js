import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Sidebar from "./Sidebar";
import MaterialTable from "./Materials/MaterialTable";
import PrinterTable from "./Printers/PrinterTable";
import ArtworkTable from "./Artwork/ArtworkTable";
import "./styles.scss";
import EmployeeTable from "./Employees/EmployeeTable";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Settings = () => {
	const authenticated = useSelector(state => state.auth.authenticated);
	const history = useHistory();

	const [ current, setCurrent ] = useState(1);

	useEffect(() => {
		if (!authenticated) {
			history.push("/login");
		}
	}, [ authenticated ]);

	return (
		<div className="settings-page">
			<Row gutter={24} className="container">
				<Col span={4} className="sidebar-container">
					<Sidebar
						current={current}
						change={(key) => {
							setCurrent(key);
						}}
					/>
				</Col>
				<Col span={19} className="content-container">
					{current === 1 && <MaterialTable/>}
					{current === 2 && <PrinterTable/>}
					{current === 3 && <ArtworkTable/>}
					{current === 4 && <EmployeeTable/>}
				</Col>
			</Row>
		</div>
	);
};

export default Settings;