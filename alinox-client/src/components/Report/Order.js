import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";

const Order = ({ report }) => {
	return (
		<Row gutter={24} className="order">
			<Col span={8} className="order-col order-col-odd">
				<Row gutter={8} className="order-col-row">
					<Col span={10} className="order-col-row-col order-col-row-col-odd">Printer: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{report.printer.name}</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">Units: </Col>
					<Col
						span={14}
						className="order-col-row-col order-col-row-col-even"
					>
						{report.printer.printUnit}
					</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">Date: </Col>
					<Col
						span={14}
						className="order-col-row-col order-col-row-col-even"
					>
						{report.createdAt}
					</Col>
				</Row>
			</Col>
			<Col span={8} className="order-col order-col-even">
				<Row gutter={8} className="order-col-row">
					<Col span={10} className="order-col-row-col order-col-row-col-odd">State/Province: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{report.customerProvince}</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">Country/Time: </Col>
					<Col
						span={14}
						className="order-col-row-col order-col-row-col-even"
					>
						{report.customerCountry}/GMT+7
					</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">Product: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{report.productName}</Col>
				</Row>
			</Col>
			<Col span={8} className="order-col order-col-odd">
				<Row gutter={8} className="order-col-row">
					<Col span={10} className="order-col-row-col order-col-row-col-odd">Customer: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{report.customerName}</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">PO Code: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{report.productCode}</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">MO Code: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{report.customerCode}</Col>
				</Row>
			</Col>
		</Row>
	);
};

Order.propTypes = {
	report: PropTypes.object.isRequired
};

export default Order;