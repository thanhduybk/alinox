import React from "react";
import PropTypes from "prop-types";
import { Col, Form, Input, Modal, Row } from "antd";

const PrinterEditForm = ({ printer, visible, onUpdate, onCancel }) => {
	const [ form ] = Form.useForm();

	return (
		<Modal
			visible={visible}
			title="Update Printer"
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
				name="printer-update-form"
				initialValues={{
					name: printer.name,
					maxRollSizeHeight: printer.maxRh,
					maxRollSizeWidth: printer.maxRw,
					minRollSizeHeight: printer.minRh,
					minRollSizeWidth: printer.minRw,
					maxPrintSizeHeight: printer.maxPh,
					maxPrintSizeWidth: printer.maxPw,
					minPrintSizeHeight: printer.minPh,
					minPrintSizeWidth: printer.minPw,
					printUnit: printer.printUnit
				}}
			>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="name"
							label="Name of Printer"
							rules={[
								{
									required: true,
									message: "Please input the name of printer!",
								},
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="printUnit"
							label="Units"
							rules={[
								{
									required: true,
									message: "Please input the maximum printing units!",
								},
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="maxRollSizeHeight"
							label="Rolling Max Length"
							rules={[]}
						>
							<Input/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="minRollSizeHeight"
							label="Rolling Min Length"
							rules={[]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="maxRollSizeWidth"
							label="Rolling Max Width"
							rules={[
								{
									required: true,
									message: "Please input the maximum rolling width!",
								},
							]}
						>
							<Input/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="minRollSizeWidth"
							label="Rolling Min Width"
							rules={[]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="maxPrintSizeHeight"
							label="Printing Max Length"
							rules={[]}
						>
							<Input/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="minPrintSizeHeight"
							label="Printing Min Length"
							rules={[]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item
							name="maxPrintSizeWidth"
							label="Printing Max Width"
							rules={[]}
						>
							<Input/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="minPrintSizeWidth"
							label="Printing Min Width"
							rules={[]}
						>
							<Input/>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Modal>
	);
};

PrinterEditForm.propTypes = {
	printer: PropTypes.object.isRequired,
	visible: PropTypes.bool.isRequired,
	onUpdate: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
};

export default PrinterEditForm;