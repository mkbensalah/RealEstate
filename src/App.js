import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import Home from './containers/Home';
import Dashboard from '../src/containers/Dashboard'
import Services from '../src/containers/Services'

import jwt_decode from 'jwt-decode';
import setAuthToken from './helpers/setAuthToken';
import { logoutUser, setCurrentUser } from './actions/authAction';

import { Provider } from 'react-redux';
import store from './store';

import Recommandation from './containers/Recommandation';
import Login from './containers/Login';

import './App.css';
import Register from './containers/Register';
import Listing from './containers/Listing';
import OwnerPage from './containers/OwnerPage';
import LeasingPage from './containers/LeasingPage';
import ListingHomes from './containers/ListingHomes';


// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // TODO: Clear current Profile

        // Redirect to login
        window.location.href = '/login';
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        {/* <Route path="/register" exact component={Register} />
                        <Route path="/owner" exact component={OwnerPage} />
                        <Route path="/listing" exact component={Listing} />
                        <Route path="/leasing" exact component={LeasingPage} />
                        <Route path="/buildings" exact component={ListingHomes} /> */}
                        <Switch>
                            <PrivateRoute path="/services" exact component={Services} />
                            <PrivateRoute path="/dashboard" exact component={Dashboard} />
                            <PrivateRoute path="/calculator" exact component={Recommandation} />
                        </Switch>
                    </Switch>
                </div>
            </Provider>
        );
    }
}

export default App;
