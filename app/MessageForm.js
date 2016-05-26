
var MessageForm = React.createClass({

	getInitialState: function() {
		return {text: ''};
	},

	handleSubmit: function(e) {
		e.preventDefault();
		var message = {
			user: this.props.user,
			text: this.props.text
		}
		this.props.onMessageSubmit(message);
		this.setState({ text: '' });
	},

	changeHandler: function(e) {
		this.setState({ text: e.target.value });
	},

	render() {
		return (
			<div className='message_form'>
				<h3>Write New Message</h3>
				<form onSubmit={this.handleSubmit}>
					<input 
						onChange={this.changeHandler}
						value={this.state.text}/>
				</form>
			</div>
		);
	}
});

var ChangeNameForm = React.createClass({
	getInitialState: function() {
		return {newName: ''};
	},

	onKey: function(e) {
		this.setState({ newName: e.target.value});
	},

	render() {
		return(
			<div className='change_name_form'>
				<h3> Change Name </h3>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.onKey}
						value={this.state.newName}/>
				</form>
			</div>
		);
	}
});
