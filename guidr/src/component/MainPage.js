import React from 'react';
import Trips from './TripsContainer/Trips';
import Portfolio from './Portfolio';
import { Route } from 'react-router-dom';
import { StyledNavbar, StyledH1, StyledLinks, StyledNavLink, StyledLogout } from './StyledComponents/StyledNavBar';
import TripForm from '../component/TripsContainer/TripForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTrip } from '../component/actions/addTripCreator';
import { editTrip } from '../component/actions/editTripCreator';
import TripEditForm from '../component/TripsContainer/TripEditForm';

class MainPage extends React.Component {
	handleLogout = () => {
		localStorage.clear();
	};
	render() {
		return (
			<div>
				<StyledNavbar>
					<StyledH1>Guidr</StyledH1>
					<StyledLinks>
						<StyledNavLink to='/'>HOME</StyledNavLink>
						<StyledNavLink to='/portfolio'>PORTFOLIO</StyledNavLink>
						<StyledNavLink to='/add-Trip'>Add Trip</StyledNavLink>
						<StyledLogout type='submit' onClick={() => this.handleLogout()}>
							LOGOUT
						</StyledLogout>
					</StyledLinks>
				</StyledNavbar>

				<Route exact path='/' render={(props) => <Trips {...props} />} />
				<Route exact path='/add-Trip' render={(props) => <TripForm {...props} addTrip={this.props.addTrip} />} />
				<Route exact path='/portfolio' render={(props) => <Portfolio {...props} />} />
				{this.props.trips.map((trip, idx) => (
					<Route
						exact
						key={idx}
						path={`/edit${trip.id}`}
						render={(props) => <TripEditForm trip={trip} key={idx} editTrip={this.props.editTrip} {...props} />}
					/>
				))}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			addTrip,
			editTrip
		},
		dispatch
	);
}

function mapStateToProps({ trips }) {
	return {
		trips
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);