import React, { Component } from 'react';
import Footer from '../components/Footer';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import LoginModal from '../components/LoginModal'
import Register from './Register'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../assets/css/custom.css'
import Header from '../components/Header';


class Login extends Component {
    constructor(props) {
        super(props);
        this.child = null;
    }

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    purchaseHandler = (type) => {
        console.log(type);
        this.setState({ purchasing: true });
        if (type === 'register') { this.child = <Register red={() => this.props.history.push('/services')} />; }
        else if (type === 'login') { this.child = <LoginModal red={this.purchaseChangeHandler} />; }
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
                    {this.child}
                </Modal>
                <Header />
                <section className="sectionpadding10050 featured-properties-area">
                    <div className="overlay">
                        <h1 className="zsg-content_collapsed header-text">Build Your Business with Dari.tn</h1>
                        <h5 className="zsg-content_collapsed description">Reach thousands of home shoppers and renters on the largest real estate network on Tunisia.</h5>
                        <h4 className="zsg-content_collapsed get-started-text" style={{ marginBottom: '50px' }}>select your profile to get connected</h4>
                    </div>
                    <section className="row zsg-g zsg-g_gutterless header-pro-section ">
                        <div className="zsg-lg-1-5 zsg-md-1-1 zsg-sm-1-1 agent col-cust"><a className="overlay" href="javascript:void(0)" onClick={() => this.purchaseHandler('login')}><span className="text">I'm an agent or broker</span></a></div>
                        <div className="zsg-lg-1-5 zsg-md-1-1 zsg-sm-1-1 builder col-cust"><a className="overlay" href="javascript:void(0)" onClick={() => this.purchaseHandler('login')}><span className="text">I'm a home builder</span></a></div>
                        <div className="zsg-lg-1-5 zsg-md-1-1 zsg-sm-1-1 lender col-cust "><a className="overlay" href="javascript:void(0)" onClick={() => this.purchaseHandler('login')}><span className="text">I'm a customer or visitor</span></a></div>
                    </section>

                    <section className="middle-section" id="yui_3_18_1_1_1555861280594_62">
                        <h3 className="network-text" id="yui_3_18_1_1_1555861280594_61">Reach our customer support on our network of leading real estate sites.</h3>
                        <div className="zsg-g zsg-g_gutterless zsg-content-section company-logo">
                            <div className="zsg-lg-1-4 zsg-md-1-4 zsg-sm-1-1">
                                <a href="#"><img src="https://www.freepnglogos.com/uploads/google-plus-png-logo/light-google-plus-logo-png-12.png"></img></a>
                            </div>
                            <div className="zsg-lg-1-4 zsg-md-1-4 zsg-sm-1-1">
                                <a href="#" target="_blank"><img src="https://www2.djicdn.com/assets/images/support/icons/icon3-b-c010506482c1bc05352c83d6c49b6b21.png"></img></a>
                            </div>
                            <div className="zsg-lg-1-4 zsg-md-1-4 zsg-sm-1-1">
                                <a href="#" target="_blank"><img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c528.png"></img></a>
                            </div>
                            <div className="zsg-lg-1-4 zsg-md-1-4 zsg-sm-1-1">
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



Register.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(Login);
