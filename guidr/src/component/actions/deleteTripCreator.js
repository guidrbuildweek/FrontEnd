import axios from './axios/axios';
import * as types from '../actions/actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const deleteTrip = (id) => (dispatch) => {
	const token = localStorage.getItem('token');
	dispatch(spinnerOn);
	axios().delete(`https://guidr-be.herokuapp.com/trips/${id}`).then((res) => {
		dispatch({ type: types.DELETE_TRIP_SUCCESS, payload: res.data.id });
		dispatch(spinnerOff);
	});
};
