import { materialActions as actions } from "../constants/Constants";

const initialState = {
	materials: [],
	waiting: false,
};

export default function MaterialReducer(state = initialState, action) {
	switch (action.type) {
	case actions.list.pending:
		return state;
	case actions.create.pending:
		return {
			...state,
			waiting: true
		};
	case actions.create.success: {
		return {
			...state,
			materials: [ action.material, ...state.materials ],
			waiting: false
		};
	}
	case actions.create.failed: {
		return {
			...state,
			waiting: false
		};
	}
	case actions.update.pending:
		return {
			...state,
			waiting: true
		};
	case actions.update.success:
		return {
			...state,
			materials: [ action.material, ...state.materials.filter(m => m.material !== action.updatedMaterialId) ],
			waiting: false
		};
	case actions.update.failed:
		return {
			...state,
			waiting: false
		};
	case actions.delete.pending:
		return {
			...state,
			waiting: true
		};
	case actions.delete.success: {
		return {
			...state,
			materials: [ ...state.materials.filter(m => m.materialId !== action.materialId) ],
			waiting: false
		};
	}
	case actions.delete.failed: {
		return {
			...state,
			waiting: false
		};
	}
	case actions.list.success:
		return {
			...state,
			materials: action.materials
		};
	case actions.list.failed:
		return state;
	default:
		return state;
	}
}