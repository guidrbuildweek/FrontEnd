import React from 'react';
import { fetchUser } from './actions/userCreator';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { editUser } from './actions/editUserCreator';
import { StyledPortfolioForm } from './StyledComponents/StyledPortfolioForm';
import { StyledInput } from './StyledComponents/StyledInput';
import { StyledButton } from './StyledComponents/StyledButton';
import {
	StyledPortfolio,
	StyledPText,
	StyledAbout,
	StyledImg,
	StyledIContainer
} from './StyledComponents/StyledPortfolio';
import { StyledTripB } from './StyledComponents/StyledTripB';
import { StyledAddTripForm, StyledLabel, StyledTH2 } from './StyledComponents/StyledAddTripForm';

class Portfolio extends React.Component {
	state = {
		isEditing: false,
		name: this.props.user.name,
		age: this.props.user.age,
		tagline: this.props.user.tagline,
		experience: this.props.user.experience,
		id: this.props.user.id
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
					<StyledTH2>Edit your profile</StyledTH2>
					<StyledLabel>Name: </StyledLabel>
					<StyledInput value={this.state.name} type='text' name='name' onChange={this.onChangeHandler} />
					<StyledLabel>Age: </StyledLabel>
					<StyledInput value={this.state.age} type='number' name='age' onChange={this.onChangeHandler} />
					<StyledLabel>Your tagline: </StyledLabel>
					<StyledInput value={this.state.tagline} type='text' name='tagline' onChange={this.onChangeHandler} />
					<StyledLabel>Years of experience: </StyledLabel>
					<StyledInput value={this.state.experience} type='number' name='experience' onChange={this.onChangeHandler} />
					<StyledButton
						onClick={() => {
							console.log('props to edit', this.props);
							console.log('props to edit', this.state);

							this.props.editUser({
								name: this.state.name,
								age: this.state.age,
								tagline: this.state.tagline,
								experience: this.state.experience,
								id: this.props.user.id
							});
						}}>
						Submit
					</StyledButton>
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
					<StyledTripB
						onClick={() =>
							this.setState({
								isEditing: true,
								name: this.props.user.name,
								age: this.props.user.age,
								tagline: this.props.user.tagline,
								experience: this.props.user.experience
							})}>
						Edit
					</StyledTripB>
				</StyledPText>
				<StyledIContainer>
					<StyledImg src='https://bit.ly/2HxMTDt' alt='Susana' />
				</StyledIContainer>
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
