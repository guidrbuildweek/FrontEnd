import React from 'react';

export default class TripEditForm extends React.Component {
	render() {
		return (
			<div>
				<input value={this.state.tripName} type='text' onChange={this.onChangeHandler} name='tripName' />
				<input value={this.state.tripType} type='text' onChange={this.onChangeHandler} name='tripType' />
				<input value={this.state.location} type='text' onChange={this.onChangeHandler} name='location' />
				<input value={this.state.durationStart} type='date' onChange={this.onChangeHandler} name='durationStart' />
				<input value={this.state.durationEnd} type='date' onChange={this.onChangeHandler} name='durationEnd' />
				<select onClick={this.onChangeHandler} name='privPro'>
					<option default value='Professional'>
						Professional
					</option>
					<option value='Private'>Private</option>
				</select>
				<input value={this.state.tripType} type='date' onChange={this.onChangeHandler} name='datePosted' />
				<button
					onClick={() =>
						this.props.editTrip({
							tripName: this.state.tripName,
							tripType: this.state.tripType,
							location: this.state.location,
							durationStart: this.state.durationStart,
							durationEnd: this.state.durationEnd,
							privPro: this.state.privPro,
							datePosted: this.state.datePosted,
							id: this.props.trip.id
						})}>
					Submit
				</button>
			</div>
		);
	}
}
