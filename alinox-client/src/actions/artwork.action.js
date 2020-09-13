import { artworkActions as actions } from "../constants/Constants";
import * as service from "../services/artwork.service";

export function list() {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.list.pending
			});

			const { data, status } = await service.list();

			if (status === 200) {
				dispatch({
					type: actions.list.success,
					artworks: data.result
				});
			} else {
				console.error(status);
				dispatch({
					type: actions.list.failed,
				});
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.list.failed
			});
		}
	};
}

export function update(artworkId, payload) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.update.pending
			});

			const { data, status } = await service.update(artworkId, payload);

			if (status === 200) {
				dispatch({
					type: actions.update.success,
					artwork: data.result,
					updatedArtworkId: artworkId
				});
				return true;
			} else {
				console.error(status);
				dispatch({
					type: actions.update.failed,
				});
				return false;
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.update.failed
			});
			return false;
		}
	};
}