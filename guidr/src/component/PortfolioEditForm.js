import React from 'react';
import { StyledPortfolioForm } from './StyledComponents/StyledPortfolioForm';
import { StyledInput } from './StyledComponents/StyledInput';
import { StyledTripB } from './StyledComponents/StyledTripB';

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
				<StyledInput value={this.state.name} type="text" name="name" onChange={this.onChangeHandler} />
				<StyledInput value={this.state.age} type="number" name="age" onChange={this.onChangeHandler} />
				<StyledInput value={this.state.tagline} type="text" name="tagline" onChange={this.onChangeHandler} />
				<StyledInput
					value={this.state.experience}
					type="number"
					name="experience"
					onChange={this.onChangeHandler}
				/>
				<StyledTripB
					onClick={() =>
						this.props.editUser({
							name: this.props.user.name,
							age: this.props.user.age,
							tagline: this.props.user.tagline,
							experience: this.props.user.experience,
							id: this.props.user.id
						})}
				>
					Submit
				</StyledTripB>
			</StyledPortfolioForm>
		);
	}
}
