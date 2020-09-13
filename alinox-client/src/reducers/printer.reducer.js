import { printerActions as actions } from "../constants/Constants";

const initialState = {
	printers: [],
	waiting: false
};

export default function printerReducer(state = initialState, action) {
	switch (action.type) {
	case actions.list.pending:
		return state;
	case actions.list.success:
		return {
			...state,
			printers: action.printers
		};
	case actions.list.failed:
		return state;
	case actions.create.pending:
	case actions.update.pending:
	case actions.delete.pending:
		return {
			...state,
			waiting: true
		};
	case actions.create.failed:
	case actions.update.failed:
	case actions.delete.failed:
		return {
			...state,
			waiting: false
		};
	case actions.create.success:
		return {
			...state,
			printers: [ action.printer, ...state.printers ],
			waiting: false
		};
	case actions.update.success:
		return {
			...state,
			printers: [ action.printer, ...state.printers.filter(p => p.printer !== action.updatedPrinterId) ],
			waiting: false
		};
	case actions.delete.success:
		return {
			...state,
			printers: [ ...state.printers.filter(p => p.printerId !== action.printerId) ],
			waiting: false
		};
	default:
		return state;
	}
}