import React from 'react';
import { StyledAddTripForm } from '../StyledComponents/StyledAddTripForm';
import { StyledTripInput } from '../StyledComponents/StyledTripInput';
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
				<label>Male</label>
				<StyledTripInput
					placeholder='Trip Type'
					type='text'
					name='tripType'
					value={this.state.tripType}
					onChange={this.onChangeHandler}
				/>
				<StyledTripInput
					placeholder='Trip Name'
					type='text'
					name='tripName'
					value={this.state.tripName}
					onChange={this.onChangeHandler}
				/>
				<StyledTripInput
					placeholder='Duration Start'
					type='date'
					name='durationStart'
					value={this.state.durationStart}
					onChange={this.onChangeHandler}
				/>
				<StyledTripInput
					placeholder='Duration End'
					type='date'
					name='durationEnd'
					value={this.state.durationEnd}
					onChange={this.onChangeHandler}
				/>
				<StyledSelect name='privPro' onClick={this.onChangeHandler}>
					<option value='professional'>Professional</option>
					<option value='private'>Private</option>
				</StyledSelect>
				<StyledTripInput
					placeholder='datePosted '
					type='date'
					name='datePosted'
					value={this.state.datePosted}
					onChange={this.onChangeHandler}
				/>
				<StyledTripInput
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
