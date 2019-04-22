import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Services from './containers/Services'
import Dashboard from '../src/components/dashboard/containers/dashboard'

import Recommandation from './containers/Recommandation';
import Login from './containers/login';

import './App.css';



class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/services" exact component={Services} />
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/calculator" exact component={Recommandation} />
				</Switch>
			</div>
		);
	}
}

export default App;
