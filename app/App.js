import React from 'react';
import {render} from 'react-dom';
import AppContainer from './AppContainer';
import { Router, Route } from 'react-router';
import {browserHistory} from 'react-router';
import EventDisplay from './EventDisplay';
import CreateEvent from './CreateEvent';
import Test from './test';
import GoogleMaps from './GoogleMaps';

render((
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer}>
			<Route path="woo" component={Test}/>
			<Route path="news" handler={GoogleMaps}/>
			<Route path="creates" component={CreateEvent}/>
		</Route>
	</Router>
	), document.getElementById('root'));