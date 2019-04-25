import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from './Register'
import SideBar from '../components/SideBar';
import HomeBuilder from '../components/AllServices/HomeBuilder'
import HomeRepair from '../components/AllServices/HomeRepair'
import HomeLeasing from '../components/AllServices/HomeLeasing'
import HomeEvaluation from '../components/AllServices/HomeEvaluation'
import HomePacking from '../components/AllServices/HomePacking'
import HomeDecorator from '../components/AllServices/HomeDecorator'
import LoginModal from '../components/LoginModal';



class Services extends Component {
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
        if (type === 'register') { this.child = <Register />; }
        else if (type === 'login') { this.child = <LoginModal />; }
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
                <Header ordered={this.purchaseHandler} />
                <SideBar type="none" />

                <div className="container">
                    <div className="row">
                    <HomeBuilder/>
                        <HomeRepair/>
                        <HomeLeasing/>
                    </div>
                    <div className="row">
                        <HomeEvaluation/>
                        <HomePacking/>
                        <HomeDecorator/>
                    </div>
                </div>

                <Footer />
            </Aux>
        );
    }
}

export default Services;
