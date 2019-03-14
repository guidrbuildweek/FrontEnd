import React from 'react';
import { StyledAddTripForm, StyledLabel, StyledTH2 } from '../StyledComponents/StyledAddTripForm';
import { StyledInput } from '../StyledComponents/StyledInput';
import { StyledSelect } from '../StyledComponents/StyledSelect';
import { StyledButton } from '../StyledComponents/StyledButton';

export default class TripForm extends React.Component {
	state = {
		tripType: '',
		tripName: '',
		durationStart: '',
		durationEnd: '',
		datePosted: '',
		location: '',
		privPro: ''
	};

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<StyledAddTripForm>
				<StyledTH2>Add your trip details</StyledTH2>
				<StyledLabel>Type: </StyledLabel>
				<StyledInput
					placeholder='Trip Type'
					type='text'
					name='tripType'
					value={this.state.tripType}
					onChange={this.onChangeHandler}
				/>
				<StyledLabel>Name: </StyledLabel>
				<StyledInput
					placeholder='Trip Name'
					type='text'
					name='tripName'
					value={this.state.tripName}
					onChange={this.onChangeHandler}
				/>
				<StyledLabel>Start Date: </StyledLabel>
				<StyledInput
					placeholder='Duration Start'
					type='date'
					name='durationStart'
					value={this.state.durationStart}
					onChange={this.onChangeHandler}
				/>
				<StyledLabel>End Date: </StyledLabel>
				<StyledInput
					placeholder='Duration End'
					type='date'
					name='durationEnd'
					value={this.state.durationEnd}
					onChange={this.onChangeHandler}
				/>
				<StyledLabel>Prof. or private: </StyledLabel>
				<StyledSelect name='privPro' onClick={this.onChangeHandler}>
					<option value='professional'>Professional</option>
					<option value='private'>Private</option>
				</StyledSelect>
				<StyledLabel>Date Posted: </StyledLabel>
				<StyledInput
					placeholder='datePosted '
					type='date'
					name='datePosted'
					value={this.state.datePosted}
					onChange={this.onChangeHandler}
				/>
				<StyledLabel>Location: </StyledLabel>
				<StyledInput
					placeholder='location '
					type='text'
					name='location'
					value={this.state.location}
					onChange={this.onChangeHandler}
				/>
				<StyledButton
					onClick={(event) =>
						this.props.addTrip(
							{
								tripName: this.state.tripName,
								tripType: this.state.tripType,
								location: this.state.location,
								durationStart: this.state.durationStart,
								durationEnd: this.state.durationEnd,
								privPro: this.state.privPro,
								datePosted: this.state.datePosted
							},
							event
						)}>
					Add Trip
				</StyledButton>
			</StyledAddTripForm>
		);
	}
}
