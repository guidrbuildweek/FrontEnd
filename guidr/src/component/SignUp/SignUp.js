import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledForm } from '../StyledComponents/StyledForm';
import { StyledInput } from '../StyledComponents/StyledInput';
// import { StyledLink } from '../StyledComponents/StyledLinkLogin';
export default class Login extends React.Component {
	state = {
		name: '',
		email: '',
		username: '',
		typeOfGuide: '',
		password: '',
		arrayOfTrips: []
	};
	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<StyledForm>
				<h2> PLEASE SIGN IN </h2>
				<StyledInput
					placeholder='Name...'
					type='text'
					name='name'
					value={this.state.user}
					onChange={this.onChangeHandler}
				/>
				<StyledInput
					placeholder='Username'
					type='text'
					name='username'
					value={this.state.username}
					onChange={this.onChangeHandler}
				/>
				<StyledInput
					placeholder='email'
					type='email'
					name='email'
					value={this.state.email}
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
					onClick={() =>
						this.props.signUp({
							name: this.state.name,
							username: this.state.username,
							password: this.state.password
						})}>
					Sign up
				</StyledButton>
				<div>
					<Link to='/login'> You already have an account ? </Link>
				</div>
			</StyledForm>
		);
	}
}
