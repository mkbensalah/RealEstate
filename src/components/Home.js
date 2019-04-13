import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import Properties from './Properties';
import Modal from './Modal'
import Aux from './hoc/Auxliary'
import Register from './Register'



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
				<SideBar />
				<Properties />
				<Footer />
			</Aux>
		);
	}
}

export default Home;
