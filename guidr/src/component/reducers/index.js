import { combineReducers } from 'redux';
import login from './loginReducer';
import spinner from './spinnerReducer';
import trips from './TripReducer';

const rootReducer = combineReducers({
	login,
	spinner,
	trips
});

export default rootReducer;
