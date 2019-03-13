import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const fetchUser = () => (dispatch) => {
	const token = localStorage.getItem('token');
	dispatch(spinnerOn);
	axios()
		.get('https://guidr-be.herokuapp.com/profile')
		.then((res) => {
			dispatch({ type: types.FETCH_USERINFO, payload: res.data });
			dispatch(spinnerOff);
		})
		.catch((err) => {
			console.log(err);
		});
};
