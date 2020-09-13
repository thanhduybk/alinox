import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input, Modal, notification, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { addEmployee as create } from "../../../actions/employee.action";

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

const EmployeeAddForm = ({ create }) => {
	const [ visible, setVisible ] = useState(false);

	const [ form ] = Form.useForm();

	const orgCode = useSelector(state => state.auth.myDetails.orgCode);

	return (
		<>
			<Button
				className="add-employee"
				shape="rounded"
				onClick={() => {
					setVisible(true);
				}}
			>
				<PlusOutlined/>{" "}Add Employee
			</Button>
			<Modal
				visible={visible}
				title="Add Employee"
				okText="Add"
				cancelText="Cancel"
				onCancel={() => {
					setVisible(false);
				}}
				onOk={() => {
					form.validateFields().then(values => {
						form.resetFields();
						create({
							...values,
							confirmPassword: values.password
						}).then((success) => {
							setVisible(false);
							if (success) {
								notification.success({
									message: "Success!",
									description: "Created new employee successfully."
								});
							} else {
								notification.error({
									message: "Failed!",
									description: "Failed to add employee."
								});
							}
						});
					});
				}}
			>
				<Form
					form={form}
					layout="vertical"
					name="employee-add-form"
					initialValues={{
						orgCode: orgCode
					}}
				>
					<Form.Item
						name="name"
						label="Name of Employee"
						rules={[
							{
								required: true,
								message: "Please input the name of employee!",
							},
						]}
					>
						<Input placeholder="Input the full name of employee"/>
					</Form.Item>
					<Form.Item
						name="username"
						label="Username"
						rules={[
							{
								required: true,
								message: "Please input the username of employee!",
							},
						]}
					>
						<Input placeholder="Input the username of employee"/>
					</Form.Item>
					<Form.Item
						name="password"
						label="Password"
						rules={[
							{
								required: true,
								message: "Please input the password of employee!",
							},
						]}
					>
						<Input.Password placeholder="Input the password of employee"/>
					</Form.Item>
					<Form.Item
						name="role"
						label="Role"
						rules={[
							{
								required: true,
								message: "Please select the role for this employee!",
							},
						]}
					>
						<Select
							placeholder="Select the role for employee"
							allowClear
						>
							{roles.map(role => (
								<Select.Option key={role.value} value={role.value}>
									{role.text}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item
						name="orgCode"
						label="Organization Code"
						rules={[
							{
								required: true,
								message: "Please input the organization code!",
							},
						]}
					>
						<Input disabled/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

EmployeeAddForm.propTypes = {
	create: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	create: (payload) => dispatch(create(payload))
});

export default connect(null, mapDispatchToProps)(EmployeeAddForm);