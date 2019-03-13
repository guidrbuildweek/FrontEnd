import React from 'react';
import { StyledTrip, StyledTitle, StyledTripTypes, StyledPosted } from '../StyledComponents/StyledTrip';
import { StyledDeleteB } from '../StyledComponents/StyledDeleteB';

export default class Trip extends React.Component {
	state = {
		isEditing: false
	};
	render() {
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
				<StyledDeleteB type="submit" onClick={() => this.props.deleteTrip(this.props.trip.id)}>
					Delete this trip
				</StyledDeleteB>
			</StyledTrip>
		);
	}
}
