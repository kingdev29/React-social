
var Message = React.createClass({
	render() {
		return (
			<div className="message">
				<strong>{this.props.user} : </strong>
				<span>{this.props.text}</span>
			</div>
		);
	};
});

var MessageList = React.createClass({
	render() {
		 return (
		 	<div className="messages">
		 		<h2 Conversation: </h2>
		 		{
		 			this.props.messages.map((message, i) => {
		 				return (
		 					<Message
		 					key={i}
		 					user={message.user}
		 					text={message.text}/>
		 				);
		 			})
		 		}
		 	</div>
		 );
	}
});
