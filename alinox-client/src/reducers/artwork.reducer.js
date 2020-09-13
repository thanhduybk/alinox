import { artworkActions as actions } from "../constants/Constants";

const initialState = {
	artworks: [],
	waiting: false
};

export default function artworkReducer(state = initialState, action) {
	switch (action.type) {
	case actions.list.pending:
		return state;
	case actions.list.success:
		return {
			...state,
			artworks: action.artworks
		};
	case actions.list.failed:
		return state;
	case actions.update.pending:
		return {
			...state,
			waiting: true
		};
	case actions.update.success:
		return {
			...state,
			artworks: [ action.artwork, ...state.artworks.filter(a => a.artworkId !== action.updatedArtworkId) ],
			waiting: false
		};
	case actions.update.failed:
		return {
			...state,
			waiting: false
		};
	default:
		return state;
	}
}