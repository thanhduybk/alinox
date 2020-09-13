import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input, Modal, notification, Select } from "antd";
import { connect, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";

import { create } from "../../../actions/material.action";

const MaterialAddForm = ({ create }) => {
	const [ visible, setVisible ] = useState(false);

	const [ form ] = Form.useForm();

	const classes = useSelector(state => state.clazz.classes);

	return (
		<>
			<Button
				className="add-material"
				shape="rounded"
				onClick={() => {
					setVisible(true);
				}}
			>
				<PlusOutlined/>{" "}Add Material
			</Button>
			<Modal
				visible={visible}
				title="Add Custom Material"
				okText="Add"
				cancelText="Cancel"
				onCancel={() => {
					setVisible(false);
				}}
				onOk={() => {
					form.validateFields().then(values => {
						form.resetFields();
						create({
							name: values.name,
							clazzId: values.clazzId
						}).then((success) => {
							setVisible(false);
							if (success) {
								notification.success({
									message: "Success!",
									description: "Added material successfully."
								});
							} else {
								notification.error({
									message: "Failed!",
									description: "Failed to add material."
								});
							}
						});
					});
				}}
			>
				<Form
					form={form}
					layout="vertical"
					name="material-add-form"
				>
					<Form.Item
						name="name"
						label="Name of Material"
						rules={[
							{
								required: true,
								message: "Please input the name of material!",
							},
						]}
					>
						<Input placeholder="Input the name of material"/>
					</Form.Item>
					<Form.Item
						name="clazzId"
						label="Type of Material"
						rules={[
							{
								required: true,
								message: "Please select the type of material!",
							},
						]}
					>
						<Select
							placeholder="Select the type of material"
							allowClear
						>
							{classes.map(clazz => (
								<Select.Option key={clazz.clazzId} value={clazz.clazzId}>
									{clazz.type}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

MaterialAddForm.propTypes = {
	create: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	create: (payload) => dispatch(create(payload))
});

export default connect(null, mapDispatchToProps)(MaterialAddForm);