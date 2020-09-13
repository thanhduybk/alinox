import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Modal, Select } from "antd";
import { useSelector } from "react-redux";

const MaterialEditForm = ({ material, visible, onUpdate, onCancel }) => {
	const [ form ] = Form.useForm();

	const classes = useSelector(state => state.clazz.classes);

	return (
		<Modal
			visible={visible}
			title="Update Material"
			okText="Update"
			cancelText="Cancel"
			onCancel={onCancel}
			onOk={() => {
				form.validateFields().then(values => {
					form.resetFields();
					onUpdate({
						name: values.name,
						clazzId: values.clazzId
					});
				});
			}}
		>
			<Form
				form={form}
				layout="vertical"
				name="material-update-form"
				initialValues={{
					name: material.name,
					clazzId: material.clazz.clazzId
				}}
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
					<Input/>
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
						placeholder="Select type of material"
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
	);
};

MaterialEditForm.propTypes = {
	material: PropTypes.object.isRequired,
	visible: PropTypes.bool.isRequired,
	onUpdate: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
};

export default MaterialEditForm;