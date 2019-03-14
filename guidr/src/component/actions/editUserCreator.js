import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const editUser = (user) => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.put(`https://guidr-be1.herokuapp.com/profile/${user.id}`, user)
		.then((response) => {
			dispatch({ type: types.EDIT_SUCCESS, payload: response.data });
			window.history.replaceState('', '/porfolio');
			window.location.reload(true);
			dispatch(spinnerOff);
			console.log('user', user);
		})
		.catch((err) => {
			console.log(err);
		});
};
/*export const editUser = (user) => (dispatch) => {
	dispatch(spinnerOn);
	fetch(`localhost:5000/profile/${user.id}`, {
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('userToken')
		},
		method: 'PUT'
	})
		.then((response) => response.json())
		.then((response) => {
			dispatch({ type: types.EDIT_SUCCESS, payload: response });
			dispatch(spinnerOff);
			console.log(user);
		})
		.catch((err) => {
			console.log(err);
		});
}; */
