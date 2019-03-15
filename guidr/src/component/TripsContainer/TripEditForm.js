import React from 'react';
import { StyledAddTripForm, StyledLabel, StyledTH2 } from '../StyledComponents/StyledAddTripForm';
import { StyledSelect } from '../StyledComponents/StyledSelect';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledInput } from '../StyledComponents/StyledInput';

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

	handleChange = () => {
		this.props.editTrip({
			tripName: this.state.tripName,
			tripType: this.state.tripType,
			location: this.state.location,
			durationStart: this.state.durationStart,
			durationEnd: this.state.durationEnd,
			privPro: this.state.privPro,
			datePosted: this.state.datePosted,
			id: this.props.trip.id
		});
		this.props.stopEditing();
	};

	render() {
		return (
			<StyledAddTripForm>
				<StyledTH2>Your trip details</StyledTH2>
				<StyledLabel>Name: </StyledLabel>
				<StyledInput value={this.state.tripName} type="text" onChange={this.onChangeHandler} name="tripName" />
				<StyledLabel>Type: </StyledLabel>
				<StyledInput value={this.state.tripType} type="text" onChange={this.onChangeHandler} name="tripType" />
				<StyledLabel>Location: </StyledLabel>
				<StyledInput value={this.state.location} type="text" onChange={this.onChangeHandler} name="location" />
				<StyledLabel>Start Date: </StyledLabel>
				<StyledInput
					value={this.state.durationStart}
					type="date"
					onChange={this.onChangeHandler}
					name="durationStart"
				/>
				<StyledLabel>End Date: </StyledLabel>
				<StyledInput
					value={this.state.durationEnd}
					type="date"
					onChange={this.onChangeHandler}
					name="durationEnd"
				/>
				<StyledLabel>Prof. or private: </StyledLabel>
				<StyledSelect onClick={this.onChangeHandler} name="privPro">
					<option default value="Professional">
						Professional
					</option>
					<option value="Private">Private</option>
				</StyledSelect>
				<StyledLabel>Date Posted: </StyledLabel>
				<StyledInput
					value={this.state.tripType}
					type="date"
					onChange={this.onChangeHandler}
					name="datePosted"
				/>
				<StyledButton onClick={() => this.handleChange()}>Submit</StyledButton>
			</StyledAddTripForm>
		);
	}
}
