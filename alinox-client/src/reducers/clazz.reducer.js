import { clazzActions as actions } from "../constants/Constants";

const initialState = {
	classes: []
};

export default function ClazzReducer(state = initialState, action) {
	switch (action.type) {
	case actions.list.pending:
		return state;
	case actions.list.success:
		return {
			...state,
			classes: action.classes
		};
	case actions.list.failed:
		return state;
	default:
		return state;
	}
}