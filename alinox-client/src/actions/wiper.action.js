import { wiperActions as actions } from "../constants/Constants";
import * as service from "../services/wiper.service";

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
					wipers: data.result
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

export function create(payload) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.create.pending
			});

			const { data, status } = await service.create(payload);

			if (status === 200) {
				dispatch({
					type: actions.create.success,
					wiper: data.result,
				});
			} else {
				console.error(status);
				dispatch({
					type: actions.create.failed,
				});
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.create.failed
			});
		}
	};
}

export function update(wiperId, payload) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.update.pending
			});

			const { data, status } = await service.update(wiperId, payload);

			if (status === 200) {
				dispatch({
					type: actions.update.success,
					wiper: data.result,
					updatedWiperId: wiperId
				});
			} else {
				console.error(status);
				dispatch({
					type: actions.update.failed,
				});
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.update.failed
			});
		}
	};
}

export function destroy(wiperId) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.delete.pending
			});

			const { status } = await service.destroy(wiperId);

			if (status === 200) {
				dispatch({
					type: actions.delete.success,
					wiperId: wiperId
				});
			} else {
				console.error(status);
				dispatch({
					type: actions.delete.failed,
				});
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.delete.failed
			});
		}
	};
}

