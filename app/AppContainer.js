import React from 'react';
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import CreateEvent from './CreateEvent';
import ViewEvents from './ViewEvents';
import NavBar from './Nav';
import FunButton from './FunButton';
import CommentBox from './CommentBox';

//import Geo from './Geo';

//funciton to convert address to coordinates


//end of geocoder
let fieldValues = 
{
	eventName: null,
	eventLocation: null,
	eventTime: null,
	eventDescription: null,
	UpVotes: 0,
	downVotes: 0
}

let eventList = [
{
	key: 2,
	eventName: 'Pool Party at the $wag Frat',
	eventLocation: '2938 East Avenue ',
	eventTime: '10pm-1am',
	eventDescription: 'swagan[nf[onan a[nv aa;kjfvb ajfjvb a;kjfvb afva afvaf[ a[fvaf  a[fvubf [afuv  afuiuva[onfv an',
	upVotes: 0,
	downVotes: 0
},
{
	key: 3,
	eventName: 'Gucci',
	eventLocation: 'eHouseHouse',
	eventTime: 'Night',
	eventDescription: 'swagan[nf[onan a[nv a[onfv an',
	upVotes: 0,
	downVotes: 0
},
{
	key: 4,
	eventName: 'Swag',
	eventLocation: 'eHouseHouse',
	eventTime: 'Night',
	eventDescription: 'swagan[nf[onan a[nv a[onfv an',
	upVotes: 0,
	downVotes: 0
}]

var AppContainer = React.createClass({
	getInitialState: function() {
		return { createEvent: false}
	},

	upVote: function(key) {
		for (var i in eventList) {
			if (eventList[i].key == key) {
				eventList[i].upVotes = eventList[i].upVotes + 1;
				this.setState({eventList: eventList});
				break;
			}
		}
		
	},

	downVote: function(key) {
		for (var i in eventList) {
			if (eventList[i].key == key) {
				eventList[i].upVotes = eventList[i].upVotes - 1;
				this.setState({eventList: eventList});
				break;
			}
		}
		
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
				<div>
				<NavBar />

				<CreateEvent fieldValues={fieldValues}
							 eventList={eventList} 
							 edit={this.edit.bind(this, null)}
							 upVote={this.upVote.bind(this, null)}
							 downVote={this.downVote.bind(this, null)}/>
				</div>
				:
				<div>
				<NavBar />
				
				<ViewEvents  eventList={eventList}
							 edit={this.edit.bind(this, null)}
							 deleteEvent={this.deleteEvent}
							 upVote={this.upVote}
							 downVote={this.downVote} />
					 
				</div>

			}
			</div>
		);
	}
});

export default AppContainer;