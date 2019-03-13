import * as types from '../actions/actionTypes';

export default function trips(state = [], action) {
	switch (action.type) {
		case types.FETCH_SUCCESS:
			return action.payload;
		case types.DELETE_TRIP_SUCCESS:
			return state.filter((trip) => trip.id !== action.payload);
		case types.ADD_TRIP_SUCCESS:
			return state.concat(action.payload);
		case types.EDIT_TRIP_SUCCESS:
			return state;
		default:
			return state;
	}
}
