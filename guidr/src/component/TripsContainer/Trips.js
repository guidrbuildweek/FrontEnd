import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTrips } from '../actions/fetchTripCreator';
import Trip from './Trip';
import { deleteTrip } from '../actions/deleteTripCreator';
import TripForm from './TripForm';
import { addTrip } from '../actions/addTripCreator';

class Trips extends React.Component {
	componentDidMount() {
		this.props.fetchTrips();
	}
	handleLogout = (location) => {
		localStorage.clear();
	};
	render() {
		return (
			<div>
				<button type='submit' onClick={() => this.handleLogout()}>
					log out
				</button>
				{this.props.trips.map((trip, idx) => <Trip trip={trip} key={idx} deleteTrip={this.props.deleteTrip} />)}
				<TripForm addTrip={this.props.addTrip} />
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
			addTrip
		},
		dispatch
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trips));
