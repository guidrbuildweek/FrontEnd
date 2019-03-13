import React from 'react';
import { StyledTrip, StyledTitle, StyledTripTypes, StyledPosted } from '../StyledComponents/StyledTrip';
import { StyledTripB } from '../StyledComponents/StyledTripB';
import { Redirect } from 'react-router-dom';

export default class Trip extends React.Component {
	state = {
		isEditing: false,
		id: this.props.trip.id
	};

	render() {
		if (this.state.isEditing) {
			return <Redirect to={`/edit${this.state.id}`} />;
		}
		return (
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
				<StyledTripB type="submit" onClick={() => this.props.deleteTrip(this.props.trip.id)}>
					Delete this trip
				</StyledTripB>
				<StyledTripB onClick={() => this.setState((st) => ({ isEditing: !st.isEditing }))}>Edit</StyledTripB>
			</StyledTrip>
		);
	}
}
