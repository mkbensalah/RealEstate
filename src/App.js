import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Services from './containers/Services'



class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/services"  component={Services} />
					<Route path="/" exact component={Home} />
				</Switch>
			</div>
		);
	}
}

export default App;
