import { authActions as actions } from "../constants/Constants";

const initialState = {
	authenticated: false,
	numTry: 0,
	myDetails: {
		employeeId: null,
		name: null,
		role: null,
		orgCode: null
	}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
	case actions.login.pending:
		return state;
	case actions.getMe.pending:
		return state;
	case actions.login.success:
		return {
			...state,
			authenticated: true,
			numTry: state.numTry + 1
		};
	case actions.getMe.success:
		return {
			...state,
			authenticated: true,
			myDetails: {
				employeeId: action.myDetails.employeeId,
				name: action.myDetails.name,
				role: action.myDetails.role,
				orgCode: action.myDetails.orgCode
			}
		};
	case actions.login.failed:
		return {
			...state,
			numTry: state.numTry + 1
		};
	case actions.getMe.failed:
		return {
			...state,
			authenticated: false
		};
	default:
		return state;
	}
};

export default authReducer;