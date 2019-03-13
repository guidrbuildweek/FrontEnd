import React from 'react';
import Trips from './TripsContainer/Trips';
import Portfolio from './Portfolio';
import { Route, NavLink } from 'react-router-dom';
import { StyledNavbar, StyledH1, StyledLinks, StyledNavLink } from './StyledComponents/StyledNavbar';

export default class MainPage extends React.Component {
	render() {
		return (
			<div>
				<StyledNavbar>
					<StyledH1>Guidr</StyledH1>
					<StyledLinks>
						<StyledNavLink to="/">HOME</StyledNavLink>
						<StyledNavLink to="/portfolio">PORTFOLIO</StyledNavLink>
					</StyledLinks>
				</StyledNavbar>

				<Route exact path="/" render={(props) => <Trips {...props} />} />
				<Route exact path="/portfolio" render={(props) => <Portfolio {...props} />} />
			</div>
		);
	}
}
