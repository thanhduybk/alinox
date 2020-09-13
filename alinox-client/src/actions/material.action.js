import { materialActions as actions } from "../constants/Constants";
import * as service from "../services/material.service";

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
					materials: data.result
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
					material: data.result,
				});
				return true;
			} else {
				console.error(status);
				dispatch({
					type: actions.create.failed,
				});
				return false;
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

export function update(materialId, payload) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.update.pending
			});

			const { data, status } = await service.update(materialId, payload);

			if (status === 200) {
				dispatch({
					type: actions.update.success,
					material: data.result,
					updatedMaterialId: materialId
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

export function destroy(materialId) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.delete.pending
			});

			const { status } = await service.destroy(materialId);

			if (status === 200) {
				dispatch({
					type: actions.delete.success,
					materialId: materialId
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

