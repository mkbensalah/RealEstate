import React, {Component} from 'react';

export default class Header extends Component {



    render(){
        return (
           	<nav className="navbar navbar-fixed-top navbar-no-bg" role="navigation">
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
						<li><button  className="bn" onClick={() => this.props.ordered('register')}>Register</button></li>
						<li><button className="bn" onClick={() => this.props.ordered('login')}>Login</button></li>
					</ul>
				</div>
			</div>
		</nav>
        )
    }
}