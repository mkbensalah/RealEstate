import React, { Component } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Single from '../components/Single';
import axios from 'axios';

import Modal from '../components/Modal'
import Aux from '../components/hoc/Auxliary'
import Register from './Register'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Single_property extends Component {
    
    constructor(props) {
        super(props);
        this.child = null;
        this.state =  {
            bien_id : this.props.match.params.id,
            bien : []
          }
        

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

        axios.get(`http://localhost:5000/api/property/id/`+this.state.bien_id)
          .then(res => {
            const res_obj = res.data;
            console.log(res_obj[0]);
            this.setState({ bien:res_obj[0] });
          });
        
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

                <div class="site-blocks-cover inner-page-cover overlay"  data-aos="fade" id="home-section">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6 mt-lg-5 text-center">
            <h1> { this.state.bien.adresse } </h1>
            <p class="mb-5"><strong class="text-white">{this.state.bien.prix } DT</strong> &mdash; S + {this.state.bien.nbchambre}, {this.state.bien.meuble==1 ? 'meuble' : 'non meuble'}, {this.state.bien.surface} m².</p>
            
          </div>
        </div>
      </div>

      <a href="#property-details" class="smoothscroll arrow-down"><span class="icon-arrow_downward"></span></a>
    </div>  
               <Single />

                <Footer />
            </Aux>
        );
    }
}



Single_property.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(Single_property);