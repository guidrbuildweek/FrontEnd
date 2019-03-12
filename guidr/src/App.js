import React, { Component } from 'react';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { login } from './component/actions/loginCreator';
import { signUp } from './component/actions/signUp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div>
				<Route exact path='/login' render={(props) => <Login {...props} login={this.props.login} />} />
				<Route exact path='/sign-up' render={(props) => <SignUp {...props} signUp={this.props.signUp} />} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		email: state.email,
		age: state.age,
		typeOfGuide: state.typeOfGuide,
		password: state.password,
		arrayOfTrips: state.arrayOfTrips
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
