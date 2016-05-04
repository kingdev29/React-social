import React from 'react';
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Card from './Card';
import GoogleMaps from './GoogleMaps';


var EventDisplay = React.createClass({

	//getInitialState: function() {
	//	return { showDetails: false};
	//},

	upVote: function(key) {
		this.props.upVote(key)
	},

	downVote: function(key) {
		this.props.downVote(key)
	},

	deleteEvent: function(key){
		console.log(key);
		this.props.deleteEvent(key);
	},

	render: function() {
		let eventList;
			eventList = this.props.eventList.map((event) => {
				return <div key={event.key}>
					<Card event={event}
							deleteEvent={this.deleteEvent}
							downVote={this.downVote}
							upVote={this.upVote} />

				</div>
				});

			
		return (
			<div className="containers">
				<div className="list">
				<div className="big">
				
				</div>
					{eventList}
					
				</div>	
			</div>
		);
	}
});

export default EventDisplay;