import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';
import { stopEditing } from './EditingCreator';

export const editTrip = (trip) => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.put(`https://guidr-be1.herokuapp.com/trips/${trip.id}`, trip)
		.then((response) => {
			dispatch({ type: types.EDIT_TRIP_SUCCESS, payload: response.data });
			dispatch(spinnerOff);
			dispatch(stopEditing);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			window.history.back();
			window.location.reload(true);
		});
};
