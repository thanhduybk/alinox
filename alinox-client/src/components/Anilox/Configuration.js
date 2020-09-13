import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";

const Configuration = ({ output }) => {
	const classes = useSelector(state => state.clazz.classes);
	const materials = useSelector(state => state.material.materials);
	const printers = useSelector(state => state.printer.printers);

	const selectedClazz = classes.find(c => c.clazzId === output.classId);
	const selectedMaterial = materials.find(m => m.materialId === output.materialId);
	const selectedPrinter = printers.find(p => p.printerId === output.printerId);

	return (
		<Row gutter={24} className="config">
			<Col span={8} className="config-col config-col-odd">
				<Row gutter={8} className="config-col-row">
					<Col span={10} className="config-col-row-col config-col-row-col-odd">Typical Printing: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{selectedClazz.name}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Name of Material: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{selectedMaterial.name}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Type of Material: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{selectedClazz.type}</Col>
				</Row>
			</Col>

			<Col span={8} className="config-col config-col-even">
				<Row gutter={8} className="config-col-row">
					<Col span={10} className="config-col-row-col config-col-row-col-odd">Type of Ink: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{output.ink}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Number of Colors: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{output.colors.length}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Size: </Col>
					<Col
						span={14}
						className="config-col-row-col config-col-row-col-even"
					>
						{selectedPrinter.maxRw}
					</Col>
				</Row>
			</Col>

			<Col span={8} className="config-col config-col-odd">
				<Row gutter={8} className="config-col-row">
					<Col span={10} className="config-col-row-col config-col-row-col-odd">Resolution (lpi): </Col>
					<Col
						span={14}
						className="config-col-row-col config-col-row-col-even">
						{output.artworkResolution}
					</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Type of Trame: </Col>
					<Col span={14} className="config-col-row-col config-col-row-col-even">{output.tram}</Col>

					<Col span={10} className="config-col-row-col config-col-row-col-odd">Angle: </Col>
					<Col
						span={14}
						className="config-col-row-col config-col-row-col-even"
					>
						{output.tramRotation.toUpperCase()}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

Configuration.propTypes = {
	output: PropTypes.object.isRequired
};

export default Configuration;