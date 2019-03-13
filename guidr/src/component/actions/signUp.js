import axios from './axios/axios';
import { spinnerOn } from './spinner';

export const signUp = (user) => (dispatch) => {
	dispatch(spinnerOn);
	axios()
		.post('https://guidr-be.herokuapp.com/register', user)
		.then((res) => console.log(res))
		.catch((error) => console.log(error));
};
