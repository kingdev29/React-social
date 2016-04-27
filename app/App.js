import React from 'react';
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import CreateEvent from './CreateEvent';
import ViewEvents from './ViewEvents';

let fieldValues = 
{
	eventName: null,
	eventLocation: null,
	eventTime: null,
	eventDescription: null,
}

let eventList = [
{
	key: 1,
	eventName: 'Gucci',
	eventLocation: 'House',
	eventTime: 'Night',
	eventDescription: 'swag'
}]

var App = React.createClass({
	getInitialState: function() {
		return { createEvent: false}
	},

	edit: function() {
		let create = !this.state.createEvent;
		this.setState({ createEvent: create});
		
	},

	deleteEvent: function(key) {
		console.log(key)
		let currentEvents = eventList.filter(function(event) {return event.key!=key});
		console.log(currentEvents)
		this.setState(currentEvents);
		eventList = currentEvents;

	},

	render: function() {
		return (
			<div>
			{
				this.state.createEvent ?
				<CreateEvent fieldValues={fieldValues} eventList={eventList} edit={this.edit.bind(this, null)}/>
				:
				<ViewEvents  eventList={eventList}
							 edit={this.edit.bind(this, null)}
							 deleteEvent={this.deleteEvent} />//bind methods allows to call parent function from child
			}
			</div>
		);
	}
});

ReactDom.render(
	<App />,
	document.getElementById('root'));