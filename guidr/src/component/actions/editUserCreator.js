import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const editUser = (user) => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.put(`https://guidr-be.herokuapp.com/profile/${user.id}`, user)
		.then((response) => {
			dispatch({ type: types.EDIT_SUCCESS, payload: response.data });
			dispatch(spinnerOff);
			console.log(response);
		})
		.catch((err) => {
			console.log(err);
		});
};
