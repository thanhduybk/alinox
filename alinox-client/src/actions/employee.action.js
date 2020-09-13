import { employeeActions as actions } from "../constants/Constants";
import * as service from "../services/employee.service";

export function list() {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.all.pending
			});

			const { data, status } = await service.list();

			if (status === 200) {
				dispatch({
					type: actions.all.success,
					employees: data.result
				});
				return true;
			} else {
				console.error(status);
				dispatch({
					type: actions.all.failed
				});
				return false;
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.all.failed
			});
			return false;
		}
	};
}

export function register(payload) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.pending
			});

			const { status } = await service.register(payload);

			if (status === 200) {
				dispatch({
					type: actions.success
				});
				return true;
			} else {
				console.error(status);
				dispatch({
					type: actions.failed
				});
				return false;
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.failed
			});
			return false;
		}
	};
}

export function addEmployee(payload) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.emp.pending
			});

			const { data, status } = await service.addEmployee(payload);

			if (status === 200) {
				dispatch({
					type: actions.emp.success,
					employee: data.result
				});
				return true;
			} else {
				console.error(status);
				dispatch({
					type: actions.emp.failed
				});
				return false;
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.emp.failed
			});
			return false;
		}
	};
}

export function modifyRole(role, empId) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.role.pending
			});

			const { status } = await service.modifyRole(role, empId);

			if (status === 200) {
				dispatch({
					type: actions.role.success,
					role: role,
					empId: empId
				});
				return true;
			} else {
				console.error(status);
				dispatch({
					type: actions.role.pending
				});
				return false;
			}
		} catch ({ response }) {
			console.log(response);
			dispatch({
				type: actions.role.failed
			});
			return false;
		}
	};
}