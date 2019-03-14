import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { StyledForm } from '../StyledComponents/StyledForm';
import { StyledInput } from '../StyledComponents/StyledInput';
import { StyledButton } from '../StyledComponents/StyledButton';

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			password: '',
			user: ''
		};
	}
	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	render() {
		return this.props.token ? (
			<Redirect to='/' />
		) : (
			<StyledForm>
				<h2> PLEASE LOG IN </h2>
				<StyledInput
					placeholder='Name...'
					type='text'
					name='user'
					value={this.state.user}
					onChange={this.onChangeHandler}
				/>
				<StyledInput
					placeholder='Password'
					type='password'
					name='password'
					value={this.state.password}
					onChange={this.onChangeHandler}
				/>
				<StyledButton
					type='submit'
					onClick={(location) =>
						this.props.login({ password: this.state.password, username: this.state.user }, location)}>
					Log in
				</StyledButton>
				<div>
					<Link to='/sign-up'> You don 't have an account ? Sign up here!</Link>
				</div>
			</StyledForm>
		);
	}
}
