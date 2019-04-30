import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Services from './containers/Services'
import Property_single from './containers/property_single' ;

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/services"  component={Services} />
					<Route path="/" exact component={Home} />
					<Route path="/single_service:id"  component={Property_single} />
				</Switch>
			</div>
		);
	}
}

export default App;
