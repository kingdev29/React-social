import React from 'react';

var SearchBar = React.createClass({

	handleChange: function() {
		this.props.onUserInput(
			this.refs.filterTextInput.value
			);
	},

	render: function() {
		return (
				<div className="box">
					<div className="container-1">
					<span className="icon"><i className="fa fa-search"></i></span>
				<input 
					id="search"
					type="text" 
					placeholder=" Search..." 
					value={this.props.filterText}
					ref="filterTextInput"
					onChange={this.handleChange} />
				</div>
				</div>
		);
	}
});



export default SearchBar;