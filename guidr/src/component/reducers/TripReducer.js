import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function trips(state = [], action) {
	switch (action.type) {
		case types.FETCH_SUCCESS:
			return action.payload;
		case types.DELETE_TRIP_SUCCESS:
			return state.filter((trip) => trip.id !== action.payload);
		case types.ADD_TRIP_SUCCESS:
			return state.concat(action.payload);
		default:
			return state;
	}
}
