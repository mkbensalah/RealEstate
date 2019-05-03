import React, { Component } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Listing from '../components/listing';
import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from './Register'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Propery_listing extends Component {
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
        if (type === 'register') { this.child = <Register red={() => this.props.history.push('/services')} />; }
        else if (type === 'login') { this.props.history.push('/login'); };
    }


    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseChangeHandler = () => {
        this.props.history.push('/services');
    }


    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
        jQuery(document).ready(function () {

            /*
                Navigation
            */
            // toggle "navbar-no-bg" class
            // $('.top-content .text').waypoint(function () {
            //     $('nav').toggleClass('navbar-no-bg');
            // });

            /*
                Background slideshow
            */
            $('.top-content').backstretch("../img/backgrounds/hero.jpg");

            $('#top-navbar-1').on('shown.bs.collapse', function () {
                $('.top-content').backstretch("resize");
            });
            $('#top-navbar-1').on('hidden.bs.collapse', function () {
                $('.top-content').backstretch("resize");
            });

            var siteStellar = function () {
                $(window).stellar({
                    responsive: false,
                    parallaxBackgrounds: true,
                    parallaxElements: true,
                    horizontalScrolling: false,
                    hideDistantElements: false,
                    scrollProperty: 'scroll'
                });
            };
            siteStellar();

            var siteCarousel = function () {
                if ($('.nonloop-block-13').length > 0) {
                    $('.nonloop-block-13').owlCarousel({
                        center: false,
                        items: 1,
                        loop: true,
                        stagePadding: 0,
                        margin: 30,
                        autoplay: true,
                        nav: false,
                        responsive: {
                            600: {
                                margin: 30,

                                items: 2
                            },
                            1000: {
                                margin: 30,
                                stagePadding: 0,

                                items: 3
                            },
                            1200: {
                                margin: 30,
                                stagePadding: 0,

                                items: 4
                            }
                        }
                    });
                }

                $('.slide-one-item, .with-dots').owlCarousel({
                    center: false,
                    items: 1,
                    loop: true,
                    stagePadding: 0,
                    margin: 0,
                    autoplay: true,
                    pauseOnHover: false,
                    nav: false,
                    dots: true,
                    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
                });

                $('.slide-one-item-alt').owlCarousel({
                    center: false,
                    items: 1,
                    loop: true,
                    stagePadding: 0,
                    smartSpeed: 700,
                    margin: 0,
                    autoplay: true,
                    pauseOnHover: false,

                });

                $('.custom-prev1').click(function (e) {
                    e.preventDefault();
                    $('.nonloop-block-13').trigger('prev.owl.carousel');
                });
                $('.custom-next1').click(function (e) {
                    e.preventDefault();
                    $('.nonloop-block-13').trigger('next.owl.carousel');
                });

                $('.custom-next').click(function (e) {
                    e.preventDefault();
                    $('.slide-one-item-alt').trigger('next.owl.carousel');
                });
                $('.custom-prev').click(function (e) {
                    e.preventDefault();
                    $('.slide-one-item-alt').trigger('prev.owl.carousel');
                });

            };
            siteCarousel();

            /*
                Wow
            */
            new WOW().init();

        });
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {this.child}

                </Modal>
                <Header ordered={this.purchaseHandler} isLighten="true" />
                <SideBar type="Search" />
                <Listing />
                <Footer />
            </Aux>
        );
    }
}



Propery_listing.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(Propery_listing);