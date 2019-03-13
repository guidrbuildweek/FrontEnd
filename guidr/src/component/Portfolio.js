import React from 'react';
import { fetchUser } from './actions/userCreator';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { editUser } from './actions/editUserCreator';
import { StyledPortfolioForm } from './StyledComponents/StyledPortfolioForm';
import { StyledInput } from './StyledComponents/StyledInput';
import { StyledPortfolio, StyledPText, StyledAbout, StyledImg } from './StyledComponents/StyledPortfolio';
import { StyledTripB } from './StyledComponents/StyledTripB';

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
				<StyledPortfolioForm>
					<StyledInput value={this.state.name} type='text' name='name' onChange={this.onChangeHandler} />
					<StyledInput value={this.state.age} type='number' name='age' onChange={this.onChangeHandler} />
					<StyledInput value={this.state.tagline} type='text' name='tagline' onChange={this.onChangeHandler} />
					<StyledInput value={this.state.experience} type='number' name='experience' onChange={this.onChangeHandler} />
					<StyledTripB
						onClick={() =>
							this.props.editUser({
								name: this.props.user.name,
								age: this.props.user.age,
								tagline: this.props.user.tagline,
								experience: this.props.user.experience,
								id: this.props.user.id
							})}>
						Submit
					</StyledTripB>
				</StyledPortfolioForm>
			);
		}
		return (
			<StyledPortfolio>
				<StyledPText>
					<h2>
						{this.props.user.name}, {this.props.user.age}
					</h2>
					<StyledAbout>About me:</StyledAbout>
					<p> {this.props.user.tagline} </p>
					<p> I've been a guide for {this.props.user.experience} years</p>
					<StyledTripB onClick={() => this.setState((st) => ({ isEditing: !st.isEditing }))}>Edit</StyledTripB>
				</StyledPText>

				<StyledImg src='https://bit.ly/2HxMTDt' alt='Susana' />
			</StyledPortfolio>
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
			fetchUser,
			editUser
		},
		dispatch
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio));
