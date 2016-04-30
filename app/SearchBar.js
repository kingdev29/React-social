import React from 'react';

var SearchBar = React.createClass({

	handleChange: function() {
		this.props.onUserInput(
			this.refs.filterTextInput
			);
	},

	render: function() {
		return (
			<form>
				<input 
					type="text" 
					placeholder="Search..." 
					value={this.props.filterText}
					ref="filterTextInput"
					onChange={this.handleChange} />
			</form>
		);
	}
});



export default SearchBar;