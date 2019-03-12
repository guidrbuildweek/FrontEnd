import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function trips(state = [], action) {
	switch (action.type) {
		case types.FETCH_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
