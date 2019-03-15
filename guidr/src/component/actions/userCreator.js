import axios from './axios/axios';
import * as types from './actionTypes';
import { spinnerOn, spinnerOff } from './spinner';

export const fetchUser = () => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.get('https://guidr-be1.herokuapp.com/profile/1')
		.then((res) => {
			dispatch({ type: types.FETCH_USERINFO, payload: res.data });
			dispatch(spinnerOff);
		})
		.catch((err) => {
			console.log(err);
		});
};
