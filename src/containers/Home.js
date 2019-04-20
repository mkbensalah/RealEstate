import React, { Component } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Properties from '../components/Properties';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from '../components/Register'
import Login from '../components/Login'



class Home extends Component {
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
        if( type === 'register' ){this.child = <Register red={() => this.props.history.push('/services')}/>; }
        else if( type === 'login') {this.child = <Login red={this.purchaseChangeHandler}/>; }
    }

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }

    purchaseChangeHandler = () => {
        this.props.history.push('/services');
    }


	render() {
		return (
			<Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {this.child}

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
