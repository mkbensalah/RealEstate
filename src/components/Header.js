import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
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
			<div>
				<div className="header_bar d-flex flex-row align-items-center justify-content-start js-sticky-top-header">
					<div className="header_list">
						<ul className="d-flex flex-row align-items-center justify-content-start">
							{/* <!-- Phone --> */}
							<li className="d-flex flex-row align-items-center justify-content-start">
								<div><img src={require("../assets/images/phone-call.png")} alt=""></img></div>
								<span>+216 28586 319</span>
							</li>
							{/* <!-- Address --> */}
							<li className="d-flex flex-row align-items-center justify-content-start">
								<div><img src={require("../assets/images/location.png")} alt=""></img></div>
								<span>BP 676 Centre Urbain Nord - 1080 Cedex</span>
							</li>
							{/* <!-- Email --> */}
							<li className="d-flex flex-row align-items-center justify-content-start">
								<div><img src={require("../assets/images/envelope.png")} alt=""></img></div>
								<span>dari.tn@contact.com</span>
							</li>
						</ul>
					</div>
					<div className="ml-auto d-flex flex-row align-items-center justify-content-start">
						<div className="social">
							<ul className="d-flex flex-row align-items-center justify-content-start">
								<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
							</ul>
						</div>
						<div className="log_reg d-flex flex-row align-items-center justify-content-start">
							<ul className="d-flex flex-row align-items-start justify-content-start">
								<li><Link to="login">Login</Link></li>
								<li><Link to="register">Register</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<header className="site-navbar py-4 js-sticky-header site-navbar-target" style={{
					WebkitBoxShadow: "4px 0 20px -5px rgba(0, 0, 0, 0.2)",
					boxShadow: "4px 0 20px -5px rgba(0, 0, 0, 0.2)",
					backgroundColor: this.props.theme
				}} role="banner">

					<div className="container">
						<div className="row align-items-center">

							<div className="col-6 col-xl-2">
								<h1 className="mb-0 site-logo m-0 p-0"><a href="index.html" className="mb-0">DARI.</a><span>tn</span></h1>
							</div>

							<div className="col-12 col-md-10 d-none d-xl-block">
								<nav className="site-navigation position-relative text-right" role="navigation">

									<ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
										<li><a href="#home-section" className="nav-link active">Home</a></li>
										<li><a href="#properties-section" className={"nav-link " + (this.props.isLighten ? "shaded" : "darken")}>Properties</a></li>
										<li><a href="#agents-section" className={"nav-link " + (this.props.isLighten ? "shaded" : "darken")}>Agents</a></li>
										<li><a href="#about-section" className={"nav-link " + (this.props.isLighten ? "shaded" : "darken")}>About</a></li>
										<li><a href="#news-section" className={"nav-link " + (this.props.isLighten ? "shaded" : "darken")}>News</a></li>
										<li><a href="#contact-section" className={"nav-link " + (this.props.isLighten ? "shaded" : "darken")}>Contact</a></li>
									</ul>
								</nav>
							</div>


							<div className="col-6 d-inline-block d-xl-none ml-md-0 py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a></div>

						</div>
					</div>

				</header>
			</div>
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
