import React, { Component } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Properties from '../components/Properties';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from './Register'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Home extends Component {
    constructor(props) {
        super(props);
        this.child = null;
    }

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    purchaseHandler = (type) => {
        console.log(type);
        this.setState({ purchasing: true });
        if (type === 'register') { this.child = <Register red={() => this.props.history.push('/services')} />; }
        else if (type === 'login') { this.props.history.push('/login'); };
    }


    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseChangeHandler = () => {
        this.props.history.push('/services');
    }


    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {this.child}

                </Modal>
                <Header ordered={this.purchaseHandler} />
                <SideBar type="Search" />
                <Properties />
                <Footer />
            </Aux>
        );
    }
}



Home.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(Home);