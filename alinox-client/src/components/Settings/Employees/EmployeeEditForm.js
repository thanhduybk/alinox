import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Modal, Select } from "antd";

const roles = [
	{
		text: "Root Administrator",
		value: "MASTER",
	},
	{
		text: "Group Manager",
		value: "MANAGER",
	},
	{
		text: "Employee",
		value: "EMPLOYEE"
	}
];

const EmployeeEditForm = ({ employee, visible, onUpdate, onCancel }) => {
	const [ form ] = Form.useForm();

	return (
		<Modal
			visible={visible}
			title="Update Role for Employee"
			okText="Update"
			cancelText="Cancel"
			onCancel={onCancel}
			onOk={() => {
				form.validateFields().then(values => {
					form.resetFields();
					onUpdate({
						role: values.role,
						empId: employee.employeeId
					});
				});
			}}
		>
			<Form
				form={form}
				layout="vertical"
				name="employee-update-form"
				initialValues={{
					name: employee.name,
					username: employee.username,
					role: employee.role
				}}
			>
				<Form.Item
					name="name"
					label="Employee Name"
				>
					<Input disabled/>
				</Form.Item>
				<Form.Item
					name="username"
					label="Username"
				>
					<Input disabled/>
				</Form.Item>
				<Form.Item
					name="role"
					label="Role"
					rules={[
						{
							required: true,
							message: "Please select role for the employee!"
						}
					]}
				>
					<Select
						placeholder="Select role for employee"
						allowClear
					>
						{roles.map(role => (
							<Select.Option key={role.value} value={role.value}>
								{role.text}
							</Select.Option>
						))}
					</Select>
				</Form.Item>
			</Form>
		</Modal>
	);
};

EmployeeEditForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	employee: PropTypes.object.isRequired,
	onUpdate: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
};

export default EmployeeEditForm;