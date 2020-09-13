import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, notification } from "antd";
import EmployeeEditForm from "./EmployeeEditForm";
import { connect } from "react-redux";
import { modifyRole as update } from "../../../actions/employee.action";

const EmployeeEditFormWrapper = ({ employee, update }) => {
	const [ visible, setVisible ] = useState(false);
	return (
		<>
			<Button.Group>
				<Button
					type="primary"
					shape="rounded"
					onClick={() => {
						setVisible(true);
					}}
				>
					Update
				</Button>
			</Button.Group>
			<EmployeeEditForm
				visible={visible}
				employee={employee}
				onCancel={() => {
					setVisible(false);
				}}
				onUpdate={(payload) => {
					update(payload.role, employee.employeeId).then((success) => {
						setVisible(false);
						if (success) {
							notification.success({
								message: "Success!",
								description: "Updated role successfully."
							});
						} else {
							notification.error({
								message: "Failed!",
								description: "Failed to update role."
							});
						}
					});
				}}
			/>
		</>
	);
};

EmployeeEditFormWrapper.propTypes = {
	employee: PropTypes.object.isRequired,
	update: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	update: (role, empId) => dispatch(update(role, empId))
});

export default connect(null, mapDispatchToProps)(EmployeeEditFormWrapper);