import React, { Component } from 'react';
import Header from '../components/Header';
import Properties from '../components/Properties';
import Footer from '../components/Footer';
import Aux from '../components/hoc/Auxliary'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Dashboard extends Component {

    // purchaseContinueHandler = () => {
    //     this.props.history.push('/checkout');
    // }


    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login');
        }

    }

    render() {
        return (
            <Aux>
                <Header name={this.props.auth.user.username}/>
                <SideNav
                    onSelect={(selected) => {
                        if( selected === 'home')
                        { this.props.history.push('dashboard'); console.log('ddddddddddddddddddddddddddddd')}
                        else {this.props.history.push('services');}
                    }}
                    style={{backgroundColor : '#55407d'}}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">

                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="services">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Services
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <Properties/>
                <h1> Mar7be bik si {this.props.auth.user.username}</h1>




                <Footer />
            </Aux>
        );
    }
}


Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(Dashboard);
