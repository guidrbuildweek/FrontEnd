import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const fetchTrips = () => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.get('https://guidr-be1.herokuapp.com/trips')
		.then((res) => {
			dispatch({ type: types.FETCH_SUCCESS, payload: res.data });
			dispatch(spinnerOff);
		})
		.catch((err) => {
			console.log(err);
		});
};
