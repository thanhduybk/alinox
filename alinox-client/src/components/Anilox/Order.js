import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";

const Order = ({ output }) => {
	const printers = useSelector(state => state.printer.printers);

	const selectedPrinter = printers.find(p => p.printerId === output.printerId);

	return (
		<Row gutter={24} className="order">
			<Col span={8} className="order-col order-col-odd">
				<Row gutter={8} className="order-col-row">
					<Col span={10} className="order-col-row-col order-col-row-col-odd">Printer: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{selectedPrinter.name}</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">Units: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{selectedPrinter.printUnit}</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">Date: </Col>
					<Col
						span={14}
						className="order-col-row-col order-col-row-col-even"
					>
						{output.createdAt}
					</Col>
				</Row>
			</Col>
			<Col span={8} className="order-col order-col-even">
				<Row gutter={8} className="order-col-row">
					<Col span={10} className="order-col-row-col order-col-row-col-odd">State/Province: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{output.customerProvince}</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">Country/Time: </Col>
					<Col
						span={14}
						className="order-col-row-col order-col-row-col-even"
					>
						{output.customerCountry}/GMT+7
					</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">Product: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{output.productName}</Col>
				</Row>
			</Col>
			<Col span={8} className="order-col order-col-odd">
				<Row gutter={8} className="order-col-row">
					<Col span={10} className="order-col-row-col order-col-row-col-odd">Customer: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{output.customerName}</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">PO Code: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{output.productCode}</Col>

					<Col span={10} className="order-col-row-col order-col-row-col-odd">MO Code: </Col>
					<Col span={14} className="order-col-row-col order-col-row-col-even">{output.customerCode}</Col>
				</Row>
			</Col>
		</Row>
	);
};

Order.propTypes = {
	output: PropTypes.object.isRequired
};

export default Order;