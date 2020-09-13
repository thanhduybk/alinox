import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, notification } from "antd";
import ArtworkEditForm from "./ArtworkEditForm";
import { connect } from "react-redux";

import { update } from "../../../actions/artwork.action";

const ArtworkFormWrapper = ({ artwork, update }) => {
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
			<ArtworkEditForm
				artwork={artwork}
				onCancel={() => {
					setVisible(false);
				}}
				onUpdate={(payload) => {
					update(artwork.artworkId, payload).then(success => {
						setVisible(false);
						if (success) {
							notification.success({
								message: "Success!",
								description: "Updated artwork successfully."
							});
						} else {
							notification.error({
								message: "Failed!",
								description: "Failed to update artwork."
							});
						}
					});
				}}
				visible={visible}
			/>
		</>
	);
};

ArtworkFormWrapper.propTypes = {
	artwork: PropTypes.object.isRequired,
	update: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	update: (artworkId, payload) => dispatch(update(artworkId, payload))
});

export default connect(null, mapDispatchToProps)(ArtworkFormWrapper);