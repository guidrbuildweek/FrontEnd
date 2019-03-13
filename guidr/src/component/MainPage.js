import React from 'react';
import Trips from './TripsContainer/Trips';
import Portfolio from './Portfolio';
import { Route, NavLink } from 'react-router-dom';

export default class MainPage extends React.Component {
	render() {
		return (
			<div>
				<NavLink to='/home'>Home</NavLink>
				<NavLink to='/portfolio'>Portfolio</NavLink>

				<Route path='/home' render={(props) => <Trips {...props} />} />
				<Route path='/portfolio' render={(props) => <Portfolio {...props} />} />
			</div>
		);
	}
}
