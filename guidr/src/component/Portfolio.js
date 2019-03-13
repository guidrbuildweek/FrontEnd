import React from 'react';
import { fetchUser } from './actions/userCreator';

export default class Portfolio extends React.Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<div>
					<h2>Portfolio</h2>
					<p>Hello! I'm {this.user.name} </p>
					<p> {this.props.user.age} </p>
					<p> {this.props.user.tagline} </p>
					<p> I've been a guide since {this.props.user.experience} </p>
				</div>
				<button>Edit</button>
			</div>
		);
	}
}
