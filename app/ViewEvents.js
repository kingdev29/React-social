import React from 'react'; 
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import EventDisplay from './EventDisplay';


var ViewEvent = React.createClass({

	downVote: function(key) {
		this.props.downVote(key);
	},

	upVote: function(key) {
		this.props.upVote(key)
	},

	edit: function() {
		this.setState(
		{
			createEvent: true
		});
		this.props.edit();

	},

	deleteEvent: function(key) {
		this.props.deleteEvent(key);
	},

	render: function() {
		return (
			<div>
				<div className="container">
					<Button onClick={this.edit}>Create Event</Button>
					<br />

					<EventDisplay eventList={this.props.eventList}
								 deleteEvent={this.deleteEvent}
								 downVote={this.downVote}
								 upVote={this.upVote}/>
				</div>
			</div>
			);
	}

});

export default ViewEvent;