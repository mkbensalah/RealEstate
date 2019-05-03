import React, { Component } from 'react';
import TopHeader from '../components/TopHeader';
import Properties from '../components/Properties';
import Footer from '../components/Footer';
import Aux from '../components/hoc/Auxliary'
import BuilderMaker from '../components/AllServices/ServiceMaker/BuilderMaker';
import RepairMaker from '../components/AllServices/ServiceMaker/RepairMaker';
import LeasingMaker from '../components/AllServices/ServiceMaker/LeasingMaker';
import AdvertisingMaker from '../components/AllServices/ServiceMaker/AdvertisingMaker';


import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashView from '../components/DashView';


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
                <TopHeader />
                <SideNav
                    onSelect={(selected) => {
                        if (selected === 'home') { this.props.history.push('dashboard'); console.log('ddddddddddddddddddddddddddddd') }
                        else { this.props.history.push('services'); }
                    }}
                    style={{ backgroundColor: 'grey' }}
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
                <DashView />

                <BuilderMaker agId={this.props.auth.user.id} />
                <RepairMaker agId={this.props.auth.user.id} />
                <LeasingMaker agId={this.props.auth.user.id} />
                <AdvertisingMaker agId={this.props.auth.user.id} />
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
