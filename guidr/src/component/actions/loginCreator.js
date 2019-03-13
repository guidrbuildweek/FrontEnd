import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const login = (user) => (dispatch) => {
	let data = JSON.stringify({
		username: user.username,
		password: user.password
	});
	dispatch(spinnerOn);
	axios().post('https://guidr-be.herokuapp.com/login', data).then((res) => {
		dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
		dispatch(spinnerOff);
	});
};
