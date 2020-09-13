import { authActions as actions } from "../constants/Constants";
import * as service from "../services/auth.service";

export function login(username, password, orgCode) {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.login.pending
			});

			const { data, status } = await service.login(username, password, orgCode);

			if (status === 200) {
				dispatch({
					type: actions.login.success
				});

				sessionStorage.setItem("alinox_jwt", data.result.accessToken);
			} else {
				console.error(status);
				dispatch({
					type: actions.login.failed
				});

				sessionStorage.removeItem("alinox_jwt");
			}
		} catch ({ response }) {
			console.error(response);
			dispatch({
				type: actions.login.failed
			});

			sessionStorage.removeItem("alinox_jwt");
		}
	};
}

export function myDetails() {
	return async function (dispatch) {
		try {
			dispatch({
				type: actions.getMe.pending
			});

			const { data, status } = await service.myDetails();

			if (status === 200) {
				dispatch({
					type: actions.getMe.success,
					myDetails: data.result
				});
			} else {
				console.error(status);
				dispatch({
					type: actions.getMe.failed
				});

				sessionStorage.removeItem("alinox_jwt");
			}
		} catch (err) {
			console.error(err);
			dispatch({
				type: actions.getMe.failed
			});

			sessionStorage.removeItem("alinox_jwt");
		}
	};
}