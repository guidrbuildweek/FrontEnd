import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const addTrip = (trip, event) => (dispatch) => {
	event.preventDefault();
	dispatch(spinnerOn);
	axios()
		.post('https://guidr-be.herokuapp.com/trips', trip)
		.then((res) => {
			dispatch({ type: types.ADD_TRIP_SUCCESS, payload: res.data });
			dispatch(spinnerOff);
		})
		.catch((err) => {
			localStorage.setItem('error', err);
			console.log(err);
			debugger;
		});
};
