import React from 'react';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledForm } from '../StyledComponents/StyledForm';
import { StyledInput } from '../StyledComponents/StyledInput';
import { StyledTH2 } from '../StyledComponents/StyledAddTripForm';
import { StyledLink } from '../StyledComponents/StyledLink';

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
				<StyledTH2> Please Sign In </StyledTH2>
				<StyledInput
					placeholder='Name'
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
					<StyledLink to='/login'> You already have an account ? </StyledLink>
				</div>
			</StyledForm>
		);
	}
}
