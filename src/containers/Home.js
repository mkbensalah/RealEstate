import React, { Component } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Properties from '../components/Properties';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from '../components/Register'



class Home extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    purchaseHandler = () => {
        this.setState( { purchasing: true } );
    }

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }

    // purchaseContinueHandler = () => {
    //     this.props.history.push('/checkout');
    // }


	render() {
		return (
			<Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <Register/>
                </Modal>
				<Header ordered={this.purchaseHandler}/>
				<SideBar type="Search"/>
				<Properties />
				<Footer />
			</Aux>
		);
	}
}

export default Home;
