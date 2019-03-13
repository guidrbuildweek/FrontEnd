import { combineReducers } from 'redux';
import login from './loginReducer';
import spinner from './spinnerReducer';
import trips from './TripReducer';
import user from './userReducer';

const rootReducer = combineReducers({
	login,
	spinner,
	trips,
	user
});

export default rootReducer;
