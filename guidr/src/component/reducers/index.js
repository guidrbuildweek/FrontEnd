import { combineReducers } from 'redux';
import login from './loginReducer';
import spinner from './spinnerReducer';
import trips from './TripReducer';
import user from './userReducer';
import editing from './editingReducer';

const rootReducer = combineReducers({
	login,
	spinner,
	trips,
	user,
	editing
});

export default rootReducer;
