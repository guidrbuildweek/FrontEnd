import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const editTrip = (trip) => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.put(`https://guidr-be.herokuapp.com/trips/${trip.id}`, trip)
		.then((response) => {
			dispatch({ type: types.EDIT_TRIP_SUCCESS, payload: response.data });
			dispatch(spinnerOff);
		})
		.catch((err) => {
			console.log(err);
		});
};
