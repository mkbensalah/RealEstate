import React, { Component } from 'react';
import Footer from '../components/Footer';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from '../components/Register'

import './custom.css'


class Login extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    // purchaseContinueHandler = () => {
    //     this.props.history.push('/checkout');
    // }


    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <Register />
                </Modal>
                <nav className="navbar navbar-fixed-top navbar-default" role="navigation">
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
                                <li><div className="btn-group" style={{ marginBottom: 12 + 'px' }}>
                                    <button type="button" className="btn navbar-btn btn-info" onClick={this.props.ordered}>Register</button>
                                    <button type="button" className="btn navbar-btn btn-default" style={{ color: "#22a9f9", fontWeight: 1000 }}>Login</button>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="sectionpadding10050 featured-properties-area">
                    <div className="overlay">
                        <h1 className="zsg-content_collapsed header-text">Build Your Business with Dari.tn</h1>
                        <h5 className="zsg-content_collapsed description">Reach thousands of home shoppers and renters on the largest real estate network on Tunisia.</h5>
                        <h4 className="zsg-content_collapsed get-started-text">select your profile to get connected</h4>
                    </div>
                    <section className="row zsg-g zsg-g_gutterless header-pro-section ">
                        <div className="zsg-lg-1-5 zsg-md-1-1 zsg-sm-1-1 agent col-md-5"><a className="overlay" href="#"><span className="text">I'm an agent or broker</span></a></div>
                        <div className="zsg-lg-1-5 zsg-md-1-1 zsg-sm-1-1 builder col-md-5"><a className="overlay" href="#"><span className="text">I'm a builder</span></a></div>
                        <div className="zsg-lg-1-5 zsg-md-1-1 zsg-sm-1-1 lender col-md-5 "><a className="overlay" href="#"><span className="text">I'm a customer or visitor</span></a></div>
                    </section>

                    <section class="middle-section" id="yui_3_18_1_1_1555861280594_62">
                        <h3 class="network-text" id="yui_3_18_1_1_1555861280594_61">Reach our customer support on our network of leading real estate sites.</h3>
                        <div class="zsg-g zsg-g_gutterless zsg-content-section company-logo">
                            <div class="zsg-lg-1-4 zsg-md-1-4 zsg-sm-1-1">
                                <a href="#"><img src="https://www.freepnglogos.com/uploads/google-plus-png-logo/light-google-plus-logo-png-12.png"></img></a>
                            </div>
                            <div class="zsg-lg-1-4 zsg-md-1-4 zsg-sm-1-1">
                                <a href="#" target="_blank"><img src="https://www2.djicdn.com/assets/images/support/icons/icon3-b-c010506482c1bc05352c83d6c49b6b21.png"></img></a>
                            </div>
                            <div class="zsg-lg-1-4 zsg-md-1-4 zsg-sm-1-1">
                                <a href="#" target="_blank"><img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c528.png"></img></a>
                            </div>
                            <div class="zsg-lg-1-4 zsg-md-1-4 zsg-sm-1-1">
                                <a href="#" target="_blank"><img src="https://www.commandersact.com/wp-content/uploads/2015/11/pinterest-logo128.png"></img></a>
                            </div>
                        </div>
                    </section>
                </section>
                <Footer />
            </Aux>
        );
    }
}

export default Login;
