import { imageS3Repo, reportActions as actions } from "../constants/Constants";
import * as service from "../services/report.service";

export function update(payload) {
	return async function (dispatch) {
		dispatch({
			type: actions.current.update,
			payload: payload
		});
	};
}

export function clean() {
	return async function (dispatch) {
		dispatch({
			type: actions.current.clean
		});
	};
}

export function resetFlag() {
	return async function (dispatch) {
		dispatch({
			type: actions.current.resetFlag
		});
	};
}

export function create(payload) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.create.pending
			});

			const { data, status } = await service.create(payload);

			if (status === 200) {
				if (data.result.productImage && !data.result.productImage.includes(imageS3Repo)) {
					data.result.productImage = `${imageS3Repo}${data.result.productImage}`;
				}

				dispatch({
					type: actions.create.success,
					report: data.result,
					success: true
				});

				return true;
			} else {
				console.error(status);
				dispatch({
					type: actions.create.failed,
					success: false
				});

				return false;
			}
		} catch (err) {
			if (err.response) {
				console.log(err.response.data);
			} else {
				console.log("Unexpected error.");
			}

			dispatch({
				type: actions.create.failed,
				success: false
			});

			return false;
		}
	};
}

export function download(reportId) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.download.pending
			});

			const { data } = await service.download(reportId);

			dispatch({
				type: actions.download.success
			});

			return data;
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.download.failed
			});
		}
	};
}

export function destroy(reportId) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.delete.pending
			});

			const { status } = await service.destroy(reportId);

			if (status === 200) {
				dispatch({
					type: actions.delete.success,
					reportId: reportId
				});

				return true;
			} else {
				console.error(status);
				dispatch({
					type: actions.delete.failed,
				});
				return false;
			}

		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.delete.failed
			});
			return false;
		}
	};
}


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
					reports: data.result
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