import axios from 'axios';
import { spinnerOn } from './spinner';

export const signUp = (user) => (dispatch) => {
	dispatch(spinnerOn);
	axios
		.post('https://guidr-be1.herokuapp.com/register', user)
		.then((res) => console.log(res))
		.catch((error) => console.log(error))
		.finally(() => {
			window.history.replaceState('', '/login');
			window.location.reload(true);
		});
};
