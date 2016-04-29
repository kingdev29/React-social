import React from 'react';
import ReactDom from 'react-dom';
import EventDisplay from './EventDisplay';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import FunButton from './FunButton';

var Card = React.createClass({

	getInitialState: function() {
		return { showDetails: false};
	},

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
		let description = ''
		if (this.state.showDetails) {
			description = this.props.event.eventDescription;
		
		}
		let card;
			card=(
			<div className="card">			
			<div className="card_title" onClick={
					()=>this.setState({showDetails: !this.state.showDetails})
					}></div>
			<div className="card_details">
			{this.props.event.eventLocation}
			{this.props.event.eventTime}
			<br />
			{description}
			</div>
			<Button className="btn" onClick={this.deleteEvent.bind(this, this.props.event.key)}>Delete</Button>
			<br />
			<Button className="btn" onClick={this.upVote.bind(this, this.props.event.key)}>Up Vote</Button>{this.props.event.upVotes}
			<Button className="btn" onClick={this.downVote.bind(this, this.props.event.key)}>Down Vote</Button>{this.props.event.downVotes}		

			</div>
						
		);
		return (
			<div>
				{card}
			</div>
		)
	}
});

export default Card;