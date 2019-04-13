import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from '../components/Register'
import SideBar from '../components/SideBar';



class Services extends Component {
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
                <Header ordered={this.purchaseHandler} />
                <SideBar type="AdvancedSearch"/>
               
                <Footer />
            </Aux>
        );
    }
}

export default Services;
