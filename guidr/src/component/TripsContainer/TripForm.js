import React from 'react';
import { StyledForm } from '../StyledComponents/StyledForm';

export default class TripForm extends React.Component {
	state = {
		tripType: '',
		tripName: '',
		durationStart: '',
		durationEnd: '',
		datePosted: '',
		location: '',
		privPro: ''
	};

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div>
				<form>
					<input
						placeholder='Trip Type'
						type='text'
						name='tripType'
						value={this.state.tripType}
						onChange={this.onChangeHandler}
					/>
					<input
						placeholder='Trip Name'
						type='text'
						name='tripName'
						value={this.state.tripName}
						onChange={this.onChangeHandler}
					/>
					<input
						placeholder='Start '
						type='date'
						name='durationStart'
						value={this.state.durationStart}
						onChange={this.onChangeHandler}
					/>
					<input
						placeholder='End '
						type='date'
						name='durationEnd'
						value={this.state.durationEnd}
						onChange={this.onChangeHandler}
					/>
					<select name='privPro' onClick={this.onChangeHandler}>
						<option value='professional'>Professional</option>
						<option value='private'>Private</option>
					</select>
					<input
						placeholder='datePosted '
						type='date'
						name='datePosted'
						value={this.state.datePosted}
						onChange={this.onChangeHandler}
					/>
					<input
						placeholder='location '
						type='text'
						name='location'
						value={this.state.location}
						onChange={this.onChangeHandler}
					/>
					<button
						onClick={(event) =>
							this.props.addTrip(
								{
									tripName: this.state.tripName,
									tripType: this.state.tripType,
									location: this.state.location,
									durationStart: this.state.durationStart,
									durationEnd: this.state.durationEnd,
									privPro: this.state.privPro,
									datePosted: this.state.datePosted
								},
								event
							)}>
						Add Trip
					</button>
				</form>
			</div>
		);
	}
}
