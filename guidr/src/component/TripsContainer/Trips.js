import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTrips } from '../actions/fetchTripCreator';
import Trip from './Trip';
import { deleteTrip } from '../actions/deleteTripCreator';
import { addTrip } from '../actions/addTripCreator';
import { editTrip } from '../actions/editTripCreator';
import { StyledTrips } from '../StyledComponents/StyledTrips';

class Trips extends React.Component {
	componentDidMount() {
		this.props.fetchTrips();
	}
	render() {
		return (
			<div>
				<StyledTrips>
					{this.props.trips.map((trip, idx) => (
						<Trip trip={trip} key={idx} deleteTrip={this.props.deleteTrip} editTrip={this.props.editTrip} />
					))}
				</StyledTrips>
			</div>
		);
	}
}

function mapStateToProps({ trips }) {
	return {
		trips
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchTrips,
			deleteTrip,
			addTrip,
			editTrip
		},
		dispatch
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trips));
