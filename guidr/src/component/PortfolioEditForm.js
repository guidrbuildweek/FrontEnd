import React from 'react';
import { StyledAddTripForm, StyledLabel, StyledTH2 } from './StyledComponents/StyledAddTripForm';
import { StyledInput } from './StyledComponents/StyledInput';
import { StyledTripB } from './StyledComponents/StyledTripB';
import { StyledPortfolioForm } from './StyledComponents/StyledPortfolioForm';

export default class PortfolioEditForm extends React.Component {
	state = {
		isEditing: false,
		name: this.props.user.name,
		age: this.props.user.age,
		tagline: this.props.user.tagline,
		experience: this.props.user.experience,
		id: this.props.id
	};

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<StyledPortfolioForm>
				<StyledTH2>Edit your profile</StyledTH2>
				<StyledLabel>Name: </StyledLabel>
				<StyledInput value={this.state.name} type='text' name='name' onChange={this.onChangeHandler} />
				<StyledLabel>Age: </StyledLabel>
				<StyledInput value={this.state.age} type='number' name='age' onChange={this.onChangeHandler} />
				<StyledLabel>Bio: </StyledLabel>
				<StyledInput value={this.state.tagline} type='text' name='tagline' onChange={this.onChangeHandler} />
				<StyledLabel>Years of experience: </StyledLabel>
				<StyledInput value={this.state.experience} type='number' name='experience' onChange={this.onChangeHandler} />
				<StyledTripB
					onClick={() =>
						this.props.editUser({
							name: this.props.user.name,
							age: this.props.user.age,
							tagline: this.props.user.tagline,
							experience: this.props.user.experience,
							id: this.props.user.id
						})}>
					Submit
				</StyledTripB>
			</StyledPortfolioForm>
		);
	}
}
