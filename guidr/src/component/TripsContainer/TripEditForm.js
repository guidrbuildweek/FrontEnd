import React from 'react';
import { StyledAddTripForm } from '../StyledComponents/StyledAddTripForm';
import { StyledSelect } from '../StyledComponents/StyledSelect';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledTripInput } from '../StyledComponents/StyledTripInput';

export default class TripEditForm extends React.Component {
	state = {
		tripName: this.props.trip.tripName,
		tripType: this.props.trip.tripType,
		location: this.props.trip.location,
		durationStart: this.props.trip.durationStart,
		durationEnd: this.props.trip.durationEnd,
		privPro: this.props.trip.privPro,
		datePosted: this.props.trip.datePosted
	};

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<StyledAddTripForm>
				<StyledTripInput value={this.state.tripName} type='text' onChange={this.onChangeHandler} name='tripName' />
				<StyledTripInput value={this.state.tripType} type='text' onChange={this.onChangeHandler} name='tripType' />
				<StyledTripInput value={this.state.location} type='text' onChange={this.onChangeHandler} name='location' />
				<StyledTripInput
					value={this.state.durationStart}
					type='date'
					onChange={this.onChangeHandler}
					name='durationStart'
				/>
				<StyledTripInput
					value={this.state.durationEnd}
					type='date'
					onChange={this.onChangeHandler}
					name='durationEnd'
				/>
				<StyledSelect onClick={this.onChangeHandler} name='privPro'>
					<option default value='Professional'>
						Professional
					</option>
					<option value='Private'>Private</option>
				</StyledSelect>
				<StyledTripInput value={this.state.tripType} type='date' onChange={this.onChangeHandler} name='datePosted' />
				<StyledButton
					onClick={() =>
						this.props.editTrip({
							tripName: this.state.tripName,
							tripType: this.state.tripType,
							location: this.state.location,
							durationStart: this.state.durationStart,
							durationEnd: this.state.durationEnd,
							privPro: this.state.privPro,
							datePosted: this.state.datePosted,
							id: this.props.trip.id
						})}>
					Submit
				</StyledButton>
			</StyledAddTripForm>
		);
	}
}
