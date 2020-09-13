import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Input, Modal, notification, Row } from "antd";
import { connect } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";

import { create } from "../../../actions/printer.action";

const PrinterAddForm = ({ create }) => {
	const [ visible, setVisible ] = useState(false);

	const [ form ] = Form.useForm();

	return (
		<>
			<Button
				className="add-printer"
				shape="rounded"
				onClick={() => {
					setVisible(true);
				}}
			>
				<PlusOutlined/>{" "}Add Printer
			</Button>
			<Modal
				visible={visible}
				title="Add Custom Printer"
				okText="Add"
				cancelText="Cancel"
				onCancel={() => {
					setVisible(false);
				}}
				onOk={() => {
					form.validateFields().then(values => {
						form.resetFields();
						create({ ...values }).then((success) => {
							setVisible(false);
							if (success) {
								notification.success({
									message: "Success!",
									description: "Added printer successfully."
								});
							} else {
								notification.error({
									message: "Failed!",
									description: "Failed to add printer."
								});
							}
						});
					});
				}}
			>
				<Form
					form={form}
					layout="vertical"
					name="printer-add-form"
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
		</>
	);
};

PrinterAddForm.propTypes = {
	create: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	create: (payload) => dispatch(create(payload))
});

export default connect(null, mapDispatchToProps)(PrinterAddForm);