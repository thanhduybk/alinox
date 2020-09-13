import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Col, Divider, Modal, notification, Row, Spin } from "antd";
import Order from "./Order";
import Configuration from "./Configuration";
import ArtworkMeta from "./ArtworkMeta";
import ArtworkDetails from "./ArtworkDetails";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { clean, create } from "../../actions/report.action";

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

function confirm(report, callback) {
	Modal.confirm({
		title: "Confirm",
		content: "Please make sure that you have all appreciate data here...",
		onOk: () => {
			callback(report).then(success => {
				if (success) {
					notification.success({
						message: "Success!",
						description: "Report saved succeeded!"
					});
				} else {
					console.error("Server error");
					notification.error({
						message: "Error!",
						description: "Failed to save report!"
					});
				}
			}).catch(err => {
				console.error("Unknown error", err);
				notification.error({
					message: "Error!",
					description: "Failed to save report!"
				});
			});
		}
	});
}

const Preview = ({ prevStep, cleanStep, saveReport, cleanReport }) => {
	const currentReport = useSelector(state => state.report.current);
	const createdSuccess = useSelector(state => state.report.success);
	const waiting = useSelector(state => state.report.waiting);
	const authenticated = useSelector(state => state.auth.authenticated);

	const history = useHistory();

	useEffect(() => {
		if (createdSuccess) {
			cleanReport();
			cleanStep();
			history.push("/history");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ createdSuccess ]);

	const confirmAndSave = () => {
		confirm(currentReport, saveReport);
	};

	return (
		<Spin spinning={waiting} delay={200} tip="Waiting a few seconds...">
			<div className="preview">
				<div className="report-body">
					<Divider/>
					<h4>ANILOX ROLL&apos;S PARAMETERS HAVE MAXIMUM 10 PRINTING UNITS</h4>
					<Order output={currentReport}/>

					<Configuration output={currentReport}/>

					{currentReport.coloredArtworks.length >= 9 ? (
						<>
							<Row gutter={8}>
								<Col {...metaLayout}>
									<ArtworkMeta/>
								</Col>
								<Col {...dataLayout}>
									<Row gutter={8}>
										{currentReport.coloredArtworks.map((item, index) => index < 4 ? (
											<Col span={6} key={item.aniloxAxis}>
												<ArtworkDetails artwork={item}/>
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
										{currentReport.coloredArtworks.map((item, index) => index >= 4 && index < 8 ? (
											<Col span={6} key={item.aniloxAxis}>
												<ArtworkDetails artwork={item}/>
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
										{currentReport.coloredArtworks.map((item, index) => index >= 8 ? (
											<Col span={6} key={item.aniloxAxis}>
												<ArtworkDetails artwork={item}/>
											</Col>
										) : null)}
									</Row>
								</Col>
							</Row>
						</>
					) : (
						currentReport.coloredArtworks.length > 4 && currentReport.coloredArtworks.length < 9 ? (
							<>
								<Row gutter={8}>
									<Col {...metaLayout}>
										<ArtworkMeta/>
									</Col>
									<Col {...dataLayout}>
										<Row gutter={8}>
											{currentReport.coloredArtworks.map((item, index) => index < 4 ? (
												<Col span={6} key={item.aniloxAxis}>
													<ArtworkDetails artwork={item}/>
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
											{currentReport.coloredArtworks.map((item, index) => index >= 4 ? (
												<Col span={6} key={item.aniloxAxis}>
													<ArtworkDetails artwork={item}/>
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
											{currentReport.coloredArtworks.map((item) => (
												<Col span={6} key={item.aniloxAxis}>
													<ArtworkDetails artwork={item}/>
												</Col>
											))}
										</Row>
									</Col>
								</Row>
							</>
						)
					)}


				</div>
				<Divider/>
				<div className="step-navigation">
					<Button
						className="step-button" type="secondary" size="large"
						onClick={prevStep}
					>
						Previous Step
					</Button>
					<Button
						className="step-button" type="primary" size="large"
						onClick={confirmAndSave}
						disabled={!authenticated}
					>
						Confirm and Save
					</Button>
				</div>
			</div>
		</Spin>
	);
};

Preview.propTypes = {
	prevStep: PropTypes.func.isRequired,
	saveReport: PropTypes.func.isRequired,
	cleanReport: PropTypes.func.isRequired,
	cleanStep: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	saveReport: (report) => dispatch(create(report)),
	cleanReport: () => dispatch(clean())
});

export default connect(null, mapDispatchToProps)(Preview);