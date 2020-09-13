import React from "react";
import PropTypes from "prop-types";
import { Col, Form, Input, Modal, Row } from "antd";

const ArtworkEditForm = ({ artwork, visible, onUpdate, onCancel }) => {
	const [ form ] = Form.useForm();

	return (
		<Modal
			visible={visible}
			title="Update Artwork"
			okText="Update"
			cancelText="Cancel"
			onCancel={onCancel}
			onOk={() => {
				form.validateFields().then(values => {
					form.resetFields();
					onUpdate({ ...values });
				});
			}}
		>
			<Form
				form={form}
				layout="vertical"
				name="artwork-update-form"
				initialValues={{
					...artwork,
					inkVolumeRange: `${artwork.minInkVolume} - ${artwork.maxInkVolume}`,
					cellDepthRange: `${artwork.minCellDepth} - ${artwork.maxCellDepth}`,
					wiperThick: artwork.wiper.thick
				}}
			>
				<Form.Item
					name="propertyName"
					label="Property"
				>
					<Input disabled/>
				</Form.Item>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="inkVolumeRange"
							label="Ink Volume Range"
						>
							<Input disabled/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="inkVolume"
							label="Ink Volume"
							rules={[
								{
									required: true,
									message: "Please input the ink volume!"
								}
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="openDegree"
							label="Opening"
							rules={[
								{
									required: true,
									message: "Please input the opening!"
								}
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="thickDegree"
							label="Wall"
							rules={[
								{
									required: true,
									message: "Please input the wall!"
								}
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="doPercent"
							label="D,O (%)"
							rules={[
								{
									required: true,
									message: "Please input the D,O!"
								}
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="angle"
							label="Angle"
							rules={[
								{
									required: true,
									message: "Please input the angle!"
								}
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="cellDepthRange"
							label="Cell Depth Range"
						>
							<Input disabled/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="cellDepth"
							label="Cell Depth"
							rules={[
								{
									required: true,
									message: "Please input the cell depth!"
								}
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="shape"
							label="Shape"
							rules={[
								{
									required: true,
									message: "Please input the shape!"
								}
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="wiperThick"
							label="Wiper&apos;s Thick"
							rules={[
								{
									required: true,
									message: "Please input the wiper thick!"
								}
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Modal>
	);
};

ArtworkEditForm.propTypes = {
	artwork: PropTypes.object.isRequired,
	visible: PropTypes.bool.isRequired,
	onUpdate: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
};

export default ArtworkEditForm;