import React from 'react';
import { StyledTrip, StyledTitle, StyledTripTypes, StyledPosted } from '../StyledComponents/StyledTrip';
import { StyledTripB } from '../StyledComponents/StyledTripB';
import { Route } from 'react-router-dom';
import { TripEditForm } from './TripEditForm';

export default class Trip extends React.Component {
	state = {
		isEditing: false,
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
		if (this.state.isEditing) {
		}
		return (
			<div>
				<Route
					path={`/trip/${this.props.id}/edit`}
					render={() => (
						<TripEditForm
							editTrip={this.props.editTrip}
							trip={{
								tripName: this.props.trip.tripName,
								tripType: this.props.trip.tripType,
								location: this.props.trip.location,
								durationStart: this.props.trip.durationStart,
								durationEnd: this.props.trip.durationEnd,
								privPro: this.props.trip.privPro,
								datePosted: this.props.trip.datePosted
							}}
						/>
					)}
				/>
				<StyledTrip>
					<div>
						<StyledTitle>{this.props.trip.tripName}</StyledTitle>
						<StyledTripTypes>
							{this.props.trip.tripType} · {this.props.trip.privPro}
						</StyledTripTypes>
						<p>Location: {this.props.trip.location}</p>
						<div>
							<p>Dates:</p>
							<p>{this.props.trip.durationStart}</p>
							<p>{this.props.trip.durationEnd}</p>
						</div>

						<StyledPosted>Posted: {this.props.trip.datePosted}</StyledPosted>
					</div>
					<StyledTripB type='submit' onClick={() => this.props.deleteTrip(this.props.trip.id)}>
						Delete this trip
					</StyledTripB>
					<StyledTripB onClick={() => this.setState((st) => ({ isEditing: !st.isEditing }))}>Edit</StyledTripB>
				</StyledTrip>
			</div>
		);
	}
}
