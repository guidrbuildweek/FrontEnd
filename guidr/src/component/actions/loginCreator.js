import axios from 'axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const login = (user) => (dispatch) => {
	dispatch(spinnerOn);
	axios.get(`https://guidr-be.herokuapp.com/login?username=${user.username}&password=${user.password}`).then((res) => {
		dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.userToken });
		dispatch(spinnerOff);
	});
};
