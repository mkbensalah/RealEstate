import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aux from '../components/hoc/Auxliary'
import BuilderMaker from '../components/AllServices/ServiceMaker/BuilderMaker';
import RepairMaker from '../components/AllServices/ServiceMaker/RepairMaker';
import LeasingMaker from '../components/AllServices/ServiceMaker/LeasingMaker';
import AdvertisingMaker from '../components/AllServices/ServiceMaker/AdvertisingMaker';
import SideNav, {NavIcon, NavItem, NavText} from '@trendmicro/react-sidenav';


import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



class ServiceMake extends Component {

    // purchaseContinueHandler = () => {
    //     this.props.history.push('/checkout');
    // }


    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    render() {
         let aa;
         const {foo} = this.props.location.state;
        if(foo === 'builder' ){ aa = <BuilderMaker agId={this.props.auth.user.id}/> ;}
        else if(foo === 'repair' ){ aa = <RepairMaker agId={this.props.auth.user.id}/> ;}
        else if(foo === 'leasing' ){ aa = <LeasingMaker agId={this.props.auth.user.id}/>;}
        else if(foo === 'advertising' ){ aa = <AdvertisingMaker agId={this.props.auth.user.id}/>;}
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
                    style={{backgroundColor: 'grey'}}
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
                <section className="sectionpadding10050 featured-properties-area">

                    <div className="row justify-content-center" style={{margin: '32px'}}>
                       {aa}

                    </div>
                </section>
                <Footer/>
            </Aux>
        );
    }
}


ServiceMake.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(ServiceMake);
