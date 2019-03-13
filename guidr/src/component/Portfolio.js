import React from 'react';
import { fetchUser } from './actions/userCreator';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { editUser } from './actions/editUserCreator';

class Portfolio extends React.Component {
	state = {
		isEditing: false,
		name: this.props.user.name,
		age: this.props.user.age,
		tagline: this.props.user.tagline,
		experience: this.props.user.experience
	};

	componentDidMount() {
		this.props.fetchUser();
	}

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		if (this.state.isEditing) {
			return (
				<div>
					<input value={this.state.name} type='text' name='name' onChange={this.onChangeHandler} />
					<input value={this.state.age} type='number' name='age' onChange={this.onChangeHandler} />
					<input value={this.state.tagline} type='text' name='name' onChange={this.onChangeHandler} />
					<input value={this.state.experience} type='text' name='experience' onChange={this.onChangeHandler} />
				</div>
			);
		}
		return (
			<div>
				<div>
					<h2>Portfolio</h2>
					<p>Hello! I'm {this.props.user.name} </p>
					<p> {this.props.user.age} </p>
					<p> {this.props.user.tagline} </p>
					<p> I've been a guide since {this.props.user.experience} </p>
				</div>
				<button onClick={() => this.setState((st) => ({ isEditing: !st.isEditing }))}>Edit</button>
			</div>
		);
	}
}

function mapStateToProps({ user }) {
	return {
		user
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchUser
		},
		dispatch
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio));
