import React from 'react';

export class Trips extends React.Component {
	componentDidMount() {
		this.props.fetchTrips();
	}
	render() {
		return <div>Hello</div>;
	}
}

function mapStateToProps(state) {
	return {
		trips: []
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchTrips,
			deleteTrip,
			editTrip
		},
		dispatch
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trips));
