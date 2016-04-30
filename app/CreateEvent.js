import React from 'react';
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import EventDisplay from './EventDisplay';

var HelloReact = React.createClass({

	getInitialState: function() {
		return { eventName: '', eventLocation: '', eventTime: '', eventDescription: ''};
	},

	update: function(e) {
		e.preventDefault()
		let data = {
			eventName: this.refs.eventName.value,
			eventLocation: this.refs.eventLocation.value,
			eventDescription: this.refs.eventDescription.value,
			eventTime: this.refs.eventTime.value,
			key: new Date()
		};
		this.setState(data); //this updates the state
		this.props.eventList.push(data); //this is where data pushed to server
		
	},

	edit: function() {
		this.setState(
		{
			createEvent: true
		});
		this.props.edit();

	},

	locationInputHandle: function() {
		console.log("onFocus Function")
	},

	render: function() {

		return (
			<div>
				<div className='inputDisplay'>
	
			<div className="container">
				<div className="col">
					<div className="col-md-4"></div>
					<div className="col-md-4 col-xs-12">
					<div className="box">
					<h2 className="create-title">Create Event</h2>
						<form>
							
							<input type='text' ref='eventName' defaultValue={this.props.fieldValues.eventName} placeholder="Event Name" className={'form-control'} /><br />
							<input type='text' onFocus={this.locationInputHandle} ref='eventLocation' defaultValue={this.props.fieldValues.eventLocation} className={'form-control'} placeholder="Location"/><br />
							<input type='time' ref='eventTime' defaultValue={this.props.fieldValues.eventTime} className={'form-control'} placeholder="Time"/><br />
							<textarea type='text' ref='eventDescription' defaultValue={this.props.fieldValues.eventDescription} className={'form-control'} placeholder="Description"/><br />
							<Button onClick={this.update}>Update</Button>
							<Button onClick={this.edit}>View Events</Button>
							
						</form>
						</div>
					</div>
					<div className="col-md-4"></div>
					
				</div>
			</div>
		</div>
			</div>
		);
	}
});

export default HelloReact;