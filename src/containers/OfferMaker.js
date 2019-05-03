import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aux from '../components/hoc/Auxliary'

import SideNav, {NavIcon, NavItem, NavText} from '@trendmicro/react-sidenav';
import OfferForm from '../components/OfferForm'
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from '../assets/images/logo1.png';


import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



class OfferMaker extends Component {

    // purchaseContinueHandler = () => {
    //     this.props.history.push('/checkout');
    // }


    componentDidMount() {
         addResponseMessage("Welcome to Dari.tn!");
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login');
        }
    }
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    }


    render() {
        const {foo} = this.props.location.state;
        return (
            <Aux>
                <Header name={this.props.auth.user.username}/>
                <SideNav
                    onSelect={(selected) => {
                        if (selected === 'home') {
                            this.props.history.push('dashboard');
                            console.log('ddddddddddddddddddddddddddddd')
                        } else {
                            this.props.history.push('services');
                        }
                    }}
                    style={{backgroundColor: '#55407d'}}
                >
                    <SideNav.Toggle/>
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">

                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="services">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
                            </NavIcon>
                            <NavText>
                                Services
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    profileAvatar={logo}
                    title="Send Message To Agency"
                    subtitle="Welcome"
                />
                <section className="sectionpadding10050 featured-properties-area">

                    <div className="row justify-content-center" style={{margin: '32px'}}>
                       <OfferForm idus={this.props.auth.user.id} idser={foo}/>


                    </div>
                </section>
                <Footer/>
            </Aux>
        );
    }
}


OfferMaker.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(OfferMaker);
