import { employeeActions as actions } from "../constants/Constants";

const initialState = {
	waiting: false,
	employees: []
};

export default function employeeReducer(state = initialState, action) {
	switch (action.type) {
	case actions.pending:
		return {
			...state,
			waiting: true
		};
	case actions.success:
		return {
			...state,
			waiting: false
		};
	case actions.failed:
		return {
			...state,
			waiting: false
		};
	case actions.all.pending:
	case actions.emp.pending:
	case actions.role.pending:
		return {
			...state,
			waiting: true
		};
	case actions.all.failed:
	case actions.emp.failed:
	case actions.role.failed:
		return {
			...state, waiting: false
		};
	case actions.all.success:
		return {
			...state,
			employees: action.employees,
			waiting: false
		};
	case actions.emp.success:
		return {
			...state,
			employees: [ action.employee, ...state.employees ],
			waiting: false
		};
	case actions.role.success:
		return {
			...state,
			employees: state.employees.map(e => {
				if (e.employeeId === action.empId) {
					return {
						...e,
						role: action.role
					};
				}

				return e;
			}),
			waiting: false
		};
	default:
		return state;
	}
}