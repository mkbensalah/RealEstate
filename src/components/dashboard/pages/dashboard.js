import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Landing from '../layout/Landing';
import Footer from '../layout/Footer';
import Aux from '../../hoc/Auxliary'



class Dashboard extends Component {

    // purchaseContinueHandler = () => {
    //     this.props.history.push('/checkout');
    // }


    render() {
        return (
            <Aux>
                <Navbar />
                <Landing type="Search" />
                <Footer />
            </Aux>
        );
    }
}

export default Dashboard;
