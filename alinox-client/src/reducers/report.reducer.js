import { reportActions as actions } from "../constants/Constants";

const initialState = {
	current: {
		classId: null,
		materialId: null,
		printerId: null,
		colors: [],
		productName: null,
		productCode: null,
		productImage: null,
		customerName: null,
		customerCode: null,
		customerCountry: null,
		customerProvince: null,
		ink: null,
		artworkResolution: null,
		tram: null,
		tramRotation: null,
		coloredArtworks: [],
		createdAt: new Intl.DateTimeFormat("vi").format(new Date())
	},
	success: false,
	waiting: false,
	reports: []
};

export default function reportReducer(state = initialState, action) {
	switch (action.type) {
	case actions.current.resetFlag:
		return {
			...state,
			success: false
		};
	case actions.list.pending:
		return state;
	case actions.list.success:
		return {
			...state,
			reports: action.reports
		};
	case actions.list.failed:
		return state;
	case actions.download.pending:
	case actions.download.success:
	case actions.download.failed:
		return state;
	case actions.current.update:
		return {
			...state,
			current: {
				...state.current,
				...action.payload
			}
		};
	case actions.current.clean:
		return {
			...state,
			current: {
				...initialState.current
			}
		};
	case actions.create.pending:
		return {
			...state,
			waiting: true
		};
	case actions.create.success:
		return {
			...state,
			reports: [ action.report, ...state.reports ],
			success: true,
			waiting: false,
		};
	case actions.create.failed:
		return {
			...state,
			success: false,
			waiting: false
		};
	case actions.delete.pending: {
		return {
			...state,
			waiting: true
		};
	}
	case actions.delete.success:
		return {
			...state,
			waiting: false,
			reports: state.reports.filter(report => report.reportId !== action.reportId)
		};
	case actions.delete.failed:
		return {
			...state,
			waiting: false
		};
	default:
		return state;
	}
}