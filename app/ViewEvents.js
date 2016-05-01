import React from 'react'; 
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import EventDisplay from './EventDisplay';
import SearchBar from './SearchBar';
import Maps from './Maps';
import GoogleMaps from './GoogleMaps';

var ViewEvent = React.createClass({

	getInitialState: function() {
		return {
			filterText: ''
		};
	},

	handleUserInput: function(filterText) {
		this.setState({
			filterText: filterText
		});
	},

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
		var rows = [];
		this.props.eventList.forEach(function(event) {
      if (event.eventName.indexOf(this.state.filterText) === -1) {
        return;
      }
      rows.push(event)
      //rows.push(<ProductRow product={product} key={product.name} />);
    }.bind(this));


		return (
			<div>
				<div className="container">
					<div className="col">
					<GoogleMaps/>
					<Button onClick={this.edit}>Create Event</Button>
					<br />
					<SearchBar 
						filterText={this.state.filterText}
						onUserInput={this.handleUserInput}/>

					<EventDisplay eventList={rows}
								 deleteEvent={this.deleteEvent}
								 downVote={this.downVote}
								 upVote={this.upVote}
								 filterText={this.state.filterText}/>
					
					</div>
				</div>
			</div>
			);
	}

});

export default ViewEvent;