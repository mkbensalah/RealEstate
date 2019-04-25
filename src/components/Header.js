import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/authAction';


class Header extends Component {
	onLogoutClick(e) {
		e.preventDefault();
		this.props.logoutUser();
	}

	render() {

		const { isAuthenticated, user } = this.props.auth;
		const authLinks = (
			<ul className="av navbar-nav navbar-right">
				<li className="nav-item">
					<a
						href=""
						onClick={this.onLogoutClick.bind(this)}
						className="nav-link"
						style={{ color: "#12a9e7" }}
					>
						<img
							className="rounded-circle"
							src="../assets/images/editor.jpg"
							alt={user.username}
							style={{ width: '25px', marginRight: '5px' }}
							title="You must have a profile connected to your email to display an image"
						/>{' '}
						Logout
				</a>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className="nav navbar-nav navbar-right">
				<li><button className="bn" onClick={() => this.props.ordered('register')}>Register</button></li>
				<li><button className="bn" onClick={() => this.props.ordered('login')}>Login</button></li>
			</ul>
		);

		return (
			<nav className={classnames('navbar navbar-fixed-top', {
				'navbar-default': isAuthenticated,
				'navbar-no-bg': !isAuthenticated
			})} role="navigation">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="index.html">Bootstrap Navbar Menu Template</a>
					</div>

					<div className="collapse navbar-collapse" id="top-navbar-1">
						<ul className="nav navbar-nav navbar-right">
							<li><a href="index.html">Home</a></li>
							<li><a href="index.html">Services</a></li>
							<li><a href="index.html">Support</a></li>
							<li><a href="index.html">AboutUs</a></li>
							<li><a href="index.html">Contact</a></li>
							{isAuthenticated ? authLinks : guestLinks}
							{/* <li><button className="bn" onClick={() => this.props.ordered('register')}>Register</button></li>
							<li><button className="bn" onClick={() => this.props.ordered('login')}>Login</button></li> */}
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}


Header.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { logoutUser })(Header);
