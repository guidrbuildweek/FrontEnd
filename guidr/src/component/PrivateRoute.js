import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, loggedIn, token, ...rest }) => {
	return <Route {...rest} render={(props) => (token ? <Component {...props} /> : <Redirect to='/login' />)} />;
};

export default PrivateRoute;
