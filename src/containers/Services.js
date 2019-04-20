import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from '../components/Register'
import SideBar from '../components/SideBar';
import Offers from '../components/Offers'
import Login from '../components/Login';



class Services extends Component {
    constructor(props){
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
        this.setState( { purchasing: true } );
        if( type === 'register' ){this.child = <Register/>; }
        else if( type === 'login') {this.child = <Login />; }
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }



    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {this.child}

                </Modal>
                <Header ordered={this.purchaseHandler}/>
                <SideBar type="AdvancedSearch"/>
                <Offers/>
                <Footer />
            </Aux>
        );
    }
}

export default Services;
