//collectoin locations, chat, voting
import React from 'react';
import {render} from 'react-dom';
import AppContainer from './AppContainer';
import { Router, Route } from 'react-router';
import {hashHistory} from 'react-router';
import EventDisplay from './EventDisplay';
import CreateEvent from './CreateEvent';
import Test from './test';
import GoogleMaps from './GoogleMaps';
import TestEventDisplay from './TestDisplayEvent';
import ChatApp from './ChatApp';


render((
	<Router history={hashHistory}>
		<Route path="/" component={AppContainer}/>
			<Route path="/woo" component={GoogleMaps}/>
			<Route path="/creates" component={CreateEvent}/>
			<Route path="/chat" component={ChatApp}/>
	</Router>
	), document.getElementById('root'));