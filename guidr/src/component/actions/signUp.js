import axios from 'axios';
import { spinnerOn } from './spinner';

export const signUp = (user) => (dispatch) => {
	dispatch(spinnerOn);
	axios
		.post('https://guidr-be.herokuapp.com/register', user)
		.then((res) => console.log(res))
		.then(window.history.replaceState('', '/login'))
		.then(window.location.reload(true))
		.catch((error) => console.log(error));
};
