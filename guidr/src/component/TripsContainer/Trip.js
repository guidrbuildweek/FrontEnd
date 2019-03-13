import React from 'react';

export default class Trip extends React.Component {
	state = {
		isEditing: false
	};
	render() {
		return (
			<div>
				<div>
					<p>{this.props.trip.tripName}</p>
					<p>{this.props.trip.tripType}</p>
					<p>{this.props.trip.location}</p>
					<p>{this.props.trip.durationStart}</p>
					<p>{this.props.trip.durationEnd}</p>
					<p>{this.props.trip.privPro}</p>
					<p>{this.props.trip.datePosted}</p>
				</div>
				<button type='submit' onClick={() => this.props.deleteTrip(this.props.trip.id)}>
					Delete
				</button>
			</div>
		);
	}
}
