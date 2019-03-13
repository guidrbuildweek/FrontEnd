import React, { Component } from 'react';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { login } from './component/actions/loginCreator';
import { signUp } from './component/actions/signUp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Trips from './component/TripsContainer/Trips';
import Portfolio from './component/Portfolio';
import PrivateRoute from './component/PrivateRoute';
import spinner from './component/reducers/spinnerReducer';
import MainPage from './component/MainPage';

class App extends Component {
	state = {
		token: localStorage.getItem('token')
	};
	render() {
		if (this.props.spinner) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<Route
					exact
					path='/login'
					render={(props) => <Login {...props} login={this.props.login} token={this.state.token} />}
				/>
				<Route exact path='/sign-up' render={(props) => <SignUp {...props} signUp={this.props.signUp} />} />
				<PrivateRoute exact path='/trips' component={Trips} token={this.state.token} />
				<PrivateRoute exact path='/portfolio' component={Portfolio} token={this.state.token} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		loggedIn: state.login.loggedIn,
		token: state.login.token,
		spinner: state.spinner
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			login,
			signUp
		},
		dispatch
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
