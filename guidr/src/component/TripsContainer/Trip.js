import React from 'react';
import { StyledTrip, StyledTitle, StyledTripTypes, StyledPosted } from '../StyledComponents/StyledTrip';
import { StyledTripB } from '../StyledComponents/StyledTripB';
import { Redirect } from 'react-router-dom';
import { startEditing } from '../actions/EditingCreator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Trip extends React.Component {
	state = {
		id: this.props.trip.id
	};
	render() {
		if (this.props.isEditing) {
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
						<p>
							{this.props.trip.durationStart} - {this.props.trip.durationEnd}
						</p>
					</div>

					<StyledPosted>Posted: {this.props.trip.datePosted}</StyledPosted>
				</div>
				<StyledTripB type='submit' onClick={() => this.props.deleteTrip(this.props.trip.id)}>
					Delete this trip
				</StyledTripB>
				<StyledTripB onClick={() => this.props.startEditing()}>Edit</StyledTripB>
			</StyledTrip>
		);
	}
}

function mapStateToProps(state) {
	return {
		isEditing: state.editing
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			startEditing
		},
		dispatch
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trip));
