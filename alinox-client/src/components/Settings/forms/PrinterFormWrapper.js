import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { destroy, update } from "../../../actions/printer.action";
import { connect } from "react-redux";
import PrinterEditForm from "./PrinterEditForm";

function showDestroyConfirm(printerId, callback) {
	Modal.confirm({
		title: "Do you really want to delete this printer?",
		icon: <ExclamationCircleOutlined/>,
		content: "Please note this operation is unrecoverable.",
		onOk() {
			callback(printerId).then(success => {
				if (success) {
					notification.success({
						message: "Success!",
						description: "Deleted printer successfully!"
					});
				} else {
					notification.error({
						message: "Failed!",
						description: "Failed to delete this printer!"
					});
				}
			});
		},
	});
}

const PrinterFormWrapper = ({ printer, update, destroy }) => {
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
				<Button
					type="danger"
					shape="rounded"
					onClick={() => {
						showDestroyConfirm(printer.printerId, destroy);
					}}
				>
					Delete
				</Button>
			</Button.Group>
			<PrinterEditForm
				visible={visible}
				printer={printer}
				onCancel={() => {
					setVisible(false);
				}}
				onUpdate={(payload) => {
					update(printer.printerId, payload).then((success) => {
						setVisible(false);
						if (success) {
							notification.success({
								message: "Success!",
								description: "Updated printer successfully."
							});
						} else {
							notification.error({
								message: "Failed!",
								description: "Failed to printer material."
							});
						}
					});
				}}
			/>
		</>
	);
};

PrinterFormWrapper.propTypes = {
	printer: PropTypes.object.isRequired,
	update: PropTypes.func.isRequired,
	destroy: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	update: (printerId, payload) => dispatch(update(printerId, payload)),
	destroy: (printerId) => dispatch(destroy(printerId))
});

export default connect(null, mapDispatchToProps)(PrinterFormWrapper);