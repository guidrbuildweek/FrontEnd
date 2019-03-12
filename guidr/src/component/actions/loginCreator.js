import axios from 'axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const login = (user) => (dispatch) => {
	let data = JSON.stringify({
		username: user.username,
		password: user.password
	});
	dispatch(spinnerOn);
	axios({
		method: 'POST',
		url: 'https://guidr-be.herokuapp.com/login',
		data,
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((res) => {
		dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
		dispatch(spinnerOff);
	});
};
