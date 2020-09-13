import { printerActions as actions } from "../constants/Constants";
import * as service from "../services/printer.service";

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
					printers: data.result
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
					printer: data.result
				});
				return true;
			} else {
				console.error(status);
				dispatch({
					type: actions.create.failed,
				});
				return true;
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.create.failed
			});
			return false;
		}
	};
}

export function update(printerId, payload) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.update.pending
			});

			const { data, status } = await service.update(printerId, payload);

			if (status === 200) {
				dispatch({
					type: actions.update.success,
					printer: data.result,
					updatedPrinterId: printerId
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

export function destroy(printerId) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.delete.pending
			});

			const { status } = await service.destroy(printerId);

			if (status === 200) {
				dispatch({
					type: actions.delete.success,
					printerId: printerId
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