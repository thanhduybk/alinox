import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

import Header from "./Header";
import { connect } from "react-redux";
import { myDetails } from "../../actions/auth.action";
import { useLocation } from "react-router-dom";
import { list as fetchClasses } from "../../actions/clazz.action";
import { list as fetchMaterials } from "../../actions/material.action";
import { list as fetchArtworks } from "../../actions/artwork.action";
import { list as fetchPrinters } from "../../actions/printer.action";
import { list as fetchEmployees } from "../../actions/employee.action";
import { clean as cleanReport, list as fetchReports } from "../../actions/report.action";

const MainLayout = ({ children, cleanReport, fetchEmployees, getMyDetails, fetchClasses, fetchMaterials, fetchArtworks, fetchPrinters, fetchReports }) => {
	// const authenticated = useSelector(state => state.auth.authenticated);
	// const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		cleanReport();
	}, [ location ]);

	useEffect(() => {
		getMyDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		fetchClasses();
		fetchMaterials();
		fetchArtworks();
		fetchPrinters();
		fetchReports();
		fetchEmployees();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="main-layout">
			<Header/>
			{children}
		</div>
	);
};

MainLayout.propTypes = {
	children: PropTypes.element,
	getMyDetails: PropTypes.func.isRequired,
	fetchMaterials: PropTypes.func.isRequired,
	fetchArtworks: PropTypes.func.isRequired,
	fetchPrinters: PropTypes.func.isRequired,
	fetchClasses: PropTypes.func.isRequired,
	fetchReports: PropTypes.func.isRequired,
	cleanReport: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	getMyDetails: () => dispatch(myDetails()),
	fetchClasses: () => dispatch(fetchClasses()),
	fetchMaterials: () => dispatch(fetchMaterials()),
	fetchArtworks: () => dispatch(fetchArtworks()),
	fetchPrinters: () => dispatch(fetchPrinters()),
	fetchReports: () => dispatch(fetchReports()),
	cleanReport: () => dispatch(cleanReport()),
	fetchEmployees: () => dispatch(fetchEmployees()),
});

export default connect(null, mapDispatchToProps)(MainLayout);