import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Real Estate Marketplace</h1>
                <p className="lead">
                  {' '}
                  <b>Admin Portal</b><br></br>
                  Monitor All Transactions And Services Now!
                </p>
                <hr />
                <Link to="/portal" className="btn btn-lg btn-info mr-2">
                  Private Portal
                </Link>
                <Link to="/visualize" className="btn btn-lg btn-light">
                  Visualization
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
