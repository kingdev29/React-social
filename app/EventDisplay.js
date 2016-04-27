import React from 'react';
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

var EventDisplay = React.createClass({

	deleteEvent: function(key){
		console.log(key);
		this.props.deleteEvent(key);
	},

	render: function() {
		
			var eventList = this.props.eventList.map((event) => {
				return <div key={event.key}>
					<Row>
						<Col xs={6} md={4}></Col>
						<Col xs={6} md={4}>
							<div className="list-items">
								<Thumbnail className="thumbnail">
							
							<p><span className="title">{event.eventName}</span></p>
							<p><em>{event.eventLocation}</em></p>
							<p><em>{event.eventTime}</em></p>
							<p><em>{event.eventDescription}</em></p>
							<Button className="btn" onClick={this.deleteEvent.bind(this, event.key)}>Delete</Button>
							
							</Thumbnail>
							</div>
						</Col>
						<Col xs={6} xsOffset={6}></Col>
					</Row>
				</div>
				});
		return (
			<div className="container">

				{eventList}				
			</div>
		)
	}
});

export default EventDisplay;