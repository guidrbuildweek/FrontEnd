import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as types from './component/actions/actionTypes';
import rootReducer from './component/reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';

const customMiddlewareToSaveUserToke = (store) => (next) => (action) => {
	console.log(store);
	if (action.type === types.LOGIN_SUCCESS) {
		localStorage.setItem('userToken', action.payload);
	}
	next(action);
};

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, logger, customMiddlewareToSaveUserToke),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
