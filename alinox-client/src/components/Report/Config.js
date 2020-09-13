import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";

const Config = ({ report }) => {
	return (
		<Row gutter={24} className="config">
			<Col span={8} className="config-col config-col-odd">
				<Row gutter={8} className="config-col-row">
					<Col span={10} className="config-col-row-col config-col-row-col-odd">Typical Printing: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{report.clazz.name}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Name of Material: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{report.material.name}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Type of Material: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{report.clazz.type}</Col>
				</Row>
			</Col>

			<Col span={8} className="config-col config-col-even">
				<Row gutter={8} className="config-col-row">
					<Col span={10} className="config-col-row-col config-col-row-col-odd">Type of Ink: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{report.ink}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Number of Colors: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{report.numColors}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Size: </Col>
					<Col
						span={14}
						className="config-col-row-col config-col-row-col-even"
					>
						{report.printer.maxRw}
					</Col>
				</Row>
			</Col>

			<Col span={8} className="config-col config-col-odd">
				<Row gutter={8} className="config-col-row">
					<Col span={10} className="config-col-row-col config-col-row-col-odd">Resolution (lpi): </Col>
					<Col
						span={14}
						className="config-col-row-col config-col-row-col-even">
						{report.artworkResolution}
					</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Type of Trame: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{report.tram}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Angle: </Col>
					<Col
						span={14}
						className="config-col-row-col config-col-row-col-even"
					>
						{report.tramRotation.toUpperCase()}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

Config.propTypes = {
	report: PropTypes.object.isRequired
};

export default Config;