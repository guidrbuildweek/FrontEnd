import React from 'react';
import Trips from './TripsContainer/Trips';
import Portfolio from './Portfolio';
import { Route } from 'react-router-dom';
import { StyledNavbar, StyledH1, StyledLinks, StyledNavLink } from './StyledComponents/StyledNavBar';

export default class MainPage extends React.Component {
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
						<button type='submit' onClick={() => this.handleLogout()}>
							log out
						</button>
					</StyledLinks>
				</StyledNavbar>

				<Route exact path='/' render={(props) => <Trips {...props} />} />
				<Route exact path='/portfolio' render={(props) => <Portfolio {...props} />} />
			</div>
		);
	}
}
