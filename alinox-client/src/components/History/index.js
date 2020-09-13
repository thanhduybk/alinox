import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DeleteOutlined } from "@ant-design/icons";

import "./styles.scss";
import { Card, Col, Empty, List, Modal, notification, Row, Spin } from "antd";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { destroy as deleteReport, resetFlag } from "../../actions/report.action";
import { Input } from "antd/es";

function confirm(reportId, callback) {
	Modal.confirm({
		title: "Confirm",
		content: "Are you sure want to delete permanently this report?",
		onOk: () => {
			callback(reportId).then(success => {
				if (success) {
					notification.success({
						message: "Success!",
						description: "Report deleted successfully."
					});
				} else {
					notification.error({
						message: "Failed!",
						description: "Failed to delete report."
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

const CardTitle = ({ reportId, productCode, productName, deleteReport }) => {
	const title = `[${productCode}] - ${productName}`;

	const onDelete = () => {
		confirm(reportId, deleteReport);
	};

	return (
		<div className="card-title">
			<div className="title">
				<Link to={`/report/${reportId}`}>{title}</Link>
			</div>
			<div className="timestamp" onClick={onDelete}><DeleteOutlined/></div>
		</div>
	);
};

const CardBody = ({ type, material, printer, resolution, image, createdAt }) => {

	return (
		<>
			<Row gutter={32} className="card-body">
				<Col span={6} className="image">
					{image ? <img src={image} alt="product-image"/> : <Empty description={false}/>}
				</Col>
				<Col span={18} className="parameters">
					<Row>
						<Col span={8} className="keys">
							<div>Class:</div>
							<div>Material:</div>
							<div>Printer:</div>
							<div>Resolution:</div>
						</Col>
						<Col span={16} className="values">
							<div>{type}</div>
							<div>{material}</div>
							<div>{printer}</div>
							<div>{resolution} (lpi)</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<div className="created-at">Created at: {createdAt}</div>
		</>
	);
};

const History = ({ resetFlag, deleteReport }) => {
	const reports = useSelector(state => state.report.reports);
	const waiting = useSelector(state => state.report.waiting);

	const [ renderedReports, setRenderedReports ] = useState(reports);

	useEffect(() => {
		resetFlag();
	}, []);

	useEffect(() => {
		setRenderedReports(reports);
	}, [ reports ]);

	const onSearch = (e) => {
		const searchTerm = e.target.value;

		if (!searchTerm || searchTerm === "") {
			setRenderedReports(reports);
		} else {
			const rendered = reports.filter(report => report.productCode.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
			setRenderedReports(rendered);
		}
	};

	return (
		<Spin tip="Waiting a few seconds..." spinning={waiting}>
			<div className="history-page">
				<div className="search-bar">
					<Input
						onChange={onSearch}
						placeholder="Type the product code to search..."
					/>
				</div>
				{renderedReports.length > 0 ?
					<List
						className="card-container"
						grid={{
							gutter: 16,
							xs: 1,
							sm: 2,
							md: 3,
							lg: 4,
							xl: 2,
							xxl: 3,
						}}
						dataSource={renderedReports}
						renderItem={item => (
							<List.Item className="card-item">
								<Card
									title={
										<CardTitle
											reportId={item.reportId}
											productCode={item.productCode}
											productName={item.productName}
											deleteReport={deleteReport}
										/>
									}
								>
									<CardBody
										type={item.clazz.type}
										material={item.material.name}
										printer={item.printer.name}
										resolution={item.artworkResolution}
										image={item.productImage}
										createdAt={item.createdAt}
									/>
								</Card>
							</List.Item>
						)}
					/> : <Empty/>}
			</div>
		</Spin>
	);
};

CardTitle.propTypes = {
	reportId: PropTypes.number.isRequired,
	productCode: PropTypes.string.isRequired,
	productName: PropTypes.string.isRequired,
	deleteReport: PropTypes.func.isRequired
};

CardBody.propTypes = {
	type: PropTypes.string.isRequired,
	material: PropTypes.string.isRequired,
	printer: PropTypes.string.isRequired,
	resolution: PropTypes.string.isRequired,
	image: PropTypes.string,
	createdAt: PropTypes.string.isRequired
};

History.propTypes = {
	resetFlag: PropTypes.func.isRequired,
	deleteReport: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	resetFlag: () => dispatch(resetFlag()),
	deleteReport: (reportId) => dispatch(deleteReport(reportId))
});

export default connect(null, mapDispatchToProps)(History);