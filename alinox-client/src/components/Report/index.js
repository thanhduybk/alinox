import React from "react";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";

import "./styles.scss";
import { Button, Col, Divider, Row } from "antd";
import ArtworkMeta from "../Anilox/ArtworkMeta";

import { connect, useSelector } from "react-redux";
import Order from "./Order";
import Config from "./Config";

import { download as downloadReport } from "../../actions/report.action";
import ArtworkDetails from "./ArtworkDetails";

const dataLayout = {
	xs: 12,
	sm: 12,
	md: 16,
	lg: 16,
	xl: 18,
	xxl: 18
};
//
const metaLayout = {
	xs: 12,
	sm: 12,
	md: 8,
	lg: 8,
	xl: 6,
	xxl: 6
};

const Report = ({ downloadReport }) => {
	const { reportId } = useParams();

	const history = useHistory();

	const reports = useSelector(state => state.report.reports);

	const report = reports.find(report => report.reportId === parseInt(reportId));

	const backToHistoryPage = () => {
		history.push("/history");
	};

	const handleDownloadReport = () => {
		downloadReport(reportId).then(res => {
			window.open(URL.createObjectURL(new Blob([ res ], {
				type: "application/pdf"
			})));
		});
	};

	if (!report) {
		return "";
	}

	return (
		<div className="report-page">
			<div className="report-body">
				<h4> ANILOX ROLL&apos;S PARAMETERS HAVE MAXIMUM 10 PRINTING UNITS</h4>
				<Order report={report}/>

				<Config report={report}/>

				{report.instances.length > 4 ? (
					<>
						<Row gutter={8}>
							<Col {...metaLayout}>
								<ArtworkMeta/>
							</Col>
							<Col {...dataLayout}>
								<Row gutter={8}>
									{report.instances.map((item, index) => index < 4 ? (
										<Col span={6} key={item.aniloxAxis}>
											<ArtworkDetails artworkInstance={item}/>
										</Col>
									) : null)}
								</Row>
							</Col>
						</Row>
						<div className="divider"/>
						<Row gutter={8}>
							<Col {...metaLayout}>
								<ArtworkMeta/>
							</Col>
							<Col {...dataLayout}>
								<Row gutter={8}>
									{report.instances.map((item, index) => index >= 4 ? (
										<Col span={6} key={item.aniloxAxis}>
											<ArtworkDetails artworkInstance={item}/>
										</Col>
									) : null)}
								</Row>
							</Col>
						</Row>
					</>
				) : (
					<>
						<Row gutter={8}>
							<Col {...metaLayout}>
								<ArtworkMeta/>
							</Col>
							<Col {...dataLayout}>
								<Row gutter={8}>
									{report.instances.map((item) => (
										<Col span={6} key={item.aniloxAxis}>
											<ArtworkDetails artworkInstance={item}/>
										</Col>
									))}
								</Row>
							</Col>

						</Row>
					</>
				)}
			</div>
			<Divider/>
			<div className="step-navigation">
				<Button
					className="step-button" type="secondary" size="large"
					onClick={backToHistoryPage}
				>
					Back to History
				</Button>
				<Button.Group>
					<Button
						className="step-button" type="primary" size="large"
						onClick={handleDownloadReport}
					>
						Download Report
					</Button>
				</Button.Group>

			</div>
		</div>
	);
};

Report.propTypes = {
	downloadReport: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	downloadReport: (reportId) => dispatch(downloadReport(reportId))
});

export default connect(null, mapDispatchToProps)(Report);