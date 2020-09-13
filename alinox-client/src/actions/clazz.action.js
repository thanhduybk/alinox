import { clazzActions as actions } from "../constants/Constants";
import * as service from "../services/clazz.service";

export function list() {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.list.pending
			});

			const { status, data } = await service.list();

			if (status === 200) {
				dispatch({
					type: actions.list.success,
					classes: data.result
				});
			} else {
				console.error(status);
				dispatch({
					type: actions.list.failed
				});
			}
		} catch (err) {
			if (err.response) {
				console.error(err.response);
			} else {
				console.error(err);
			}

			dispatch({
				type: actions.list.failed
			});
		}
	};
}