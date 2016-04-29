import React from 'react';
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import EventDisplay from './EventDisplay';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

var Card = React.createClass({

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
		return (
			<Row>
						<Col xs={6} md={4}></Col>
						<Col xs={6} md={4}>
							<div className="card">
								<Thumbnail className="thumbnail">
							
							<p><span className="title">{event.eventName}</span></p>
							<p><em>{this.props.event.eventLocation}</em></p>
							<p><em>{this.props.event.eventTime}</em></p>
							<p><em>{this.props.event.eventDescription}</em></p>
							<Button className="btn" onClick={this.deleteEvent.bind(this, event.key)}>Delete</Button>
							<br />
							<Button className="btn" onClick={this.upVote.bind(this, event.key)}>Up Vote</Button>{event.upVotes}
							<Button className="btn" onClick={this.downVote.bind(this,event.key)}>Down Vote</Button>{event.downVotes}
							
							</Thumbnail>
							</div>
						</Col>
						<Col xs={6} xsOffset={6}></Col>
					</Row>

		);
	}
});

export default Card;