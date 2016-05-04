import React, { Component } from 'react';
import { render } from 'react-dom';

import About from './About';
import Home from './Home';
import Repos from './Repos';

class App extends Component {
	constructor(){
		super(...arguments);
		this.state= {
			route: window.location.hash.subtrs(1)
		};
	}

	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
		render() {...}
}

render(<App />, document.getElementById('root'));

