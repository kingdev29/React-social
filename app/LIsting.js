import React, { Component } from 'react';

class Listing extends Component {

	getInitialState(){
		return {
			nameText: "I am from the default state"
		};
	}

	handleChange(e){
		this.setState({nameText: e.target.value});
	}

 	render(){
		return (

	    <div>
	    	<h1>Event Listings</h1>
	    	<form>
	    		<input 
	    			type="text"
	    			placeholder="Name"
	    			value={this.state.nameText}
	    			ref="nameTextInput"
	    			onChange={this.handleChange} />
	    	</form>
	    		<p>{this.state.nameText}</p>	    	
	    </div>
	    );
	  }
	}

export default Listing;