import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const editUser = (user) => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.put(`https://guidr-be.herokuapp.com/profile/0`, user)
		.then((response) => {
			dispatch({ type: types.EDIT_SUCCESS, payload: response.data });
			dispatch(spinnerOff);
		})
		.catch((err) => {
			console.log(err);
		});
};
