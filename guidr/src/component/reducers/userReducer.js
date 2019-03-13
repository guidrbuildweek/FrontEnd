import * as types from '../actions/actionTypes';

export default function user(state = [], action) {
	switch (action.type) {
		case types.FETCH_USERINFO:
			return action.payload;
		case types.EDIT_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
