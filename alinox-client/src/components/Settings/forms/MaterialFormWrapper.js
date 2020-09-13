import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, notification } from "antd";
import MaterialEditForm from "./MaterialEditForm";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { destroy, update } from "../../../actions/material.action";
import { connect } from "react-redux";

function showDestroyConfirm(materialId, callback) {
	Modal.confirm({
		title: "Do you really want to delete this material?",
		icon: <ExclamationCircleOutlined/>,
		content: "Please note this operation is unrecoverable.",
		onOk() {
			callback(materialId).then(success => {
				if (success) {
					notification.success({
						message: "Success!",
						description: "Deleted material successfully!"
					});
				} else {
					notification.error({
						message: "Failed!",
						description: "Failed to delete this material!"
					});
				}
			});
		},
	});
}

const MaterialFormWrapper = ({ material, update, destroy }) => {
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
						showDestroyConfirm(material.materialId, destroy);
					}}
				>
					Delete
				</Button>
			</Button.Group>
			<MaterialEditForm
				visible={visible}
				material={material}
				onCancel={() => {
					setVisible(false);
				}}
				onUpdate={(payload) => {
					update(material.materialId, payload).then((success) => {
						setVisible(false);
						if (success) {
							notification.success({
								message: "Success!",
								description: "Updated material successfully."
							});
						} else {
							notification.error({
								message: "Failed!",
								description: "Failed to update material."
							});
						}
					});
				}}
			/>
		</>
	);
};

MaterialFormWrapper.propTypes = {
	material: PropTypes.object.isRequired,
	update: PropTypes.func.isRequired,
	destroy: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	update: (materialId, payload) => dispatch(update(materialId, payload)),
	destroy: (materialId) => dispatch(destroy(materialId))
});

export default connect(null, mapDispatchToProps)(MaterialFormWrapper);