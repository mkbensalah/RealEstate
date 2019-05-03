import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import '../assets/css/index.css';





class DashView extends Component {

    componentDidMount() {

        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login');
        }

        $(document).ready(function () {
            // Declare Carousel jquery object
            var owl = $('.owl-carousel');

            // Carousel initialization
            owl.owlCarousel({
                loop: true,
                margin: 0,
                navSpeed: 800,
                nav: true,
                autoplay: true,
                rewind: true,
                items: 1
            });

            $('.owl-dots').hide();

            // add animate.css class(es) to the elements to be animated
            function setAnimation(_elem, _InOut) {
                // Store all animationend event name in a string.
                // cf animate.css documentation
                var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

                _elem.each(function () {
                    var $elem = $(this);
                    var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

                    $elem.addClass($animationType).one(animationEndEvent, function () {
                        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
                    });
                });
            }

            // Fired before current slide change
            owl.on('change.owl.carousel', function (event) {
                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-out]");
                setAnimation($elemsToanim, 'out');
            });

            // Fired after current slide has been changed
            var round = 0;
            owl.on('changed.owl.carousel', function (event) {

                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-in]");

                setAnimation($elemsToanim, 'in');
            })

            owl.on('translated.owl.carousel', function (event) {
                console.log(event.item.index, event.page.count);

                if (event.item.index == (event.page.count - 1)) {
                    if (round < 1) {
                        round++
                        console.log(round);
                    } else {
                        owl.trigger('stop.owl.autoplay');
                        var owlData = owl.data('owl.carousel');
                        owlData.settings.autoplay = false; //don't know if both are necessary
                        owlData.options.autoplay = false;
                        owl.trigger('refresh.owl.carousel');
                    }
                }
            });

        });
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: "100px" }}></div>
                <div className="js-view-container" name="visibility: visible; opacity: 1;">

                    <div id="view-dashboard" className="view">
                        <div className="container">
                            <div className="row">



                                <div className="col-xs-12">

                                    <div id="demo-popover" name="display:none;"></div>

                                    <div className="tiles">
                                        <div className="col-xs-5">
                                            <div className="tile cover disabled" style={{ textAlign: "left" }}>
                                                <h2>Hello,</h2>
                                                <h2>{this.props.auth.user.username}</h2>
                                            </div>
                                        </div>
                                        <div className="col-xs-2">
                                            <div className="tile light blue js-nav-action" data-id="occupant">
                                                <div className="carousel slide">
                                                    <div className="carousel-inner owl-carousel owl-theme">
                                                        <div className="item text-center">
                                                            <div className="vertical-center" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">
                                                                <h4><i className="fa fa-group fa-5x"></i></h4>
                                                                <h3>Tenants</h3>
                                                            </div>
                                                        </div>
                                                        <div className="item text-center" >
                                                            <div className="vertical-center">
                                                                <div id="count-all-occupants" className="tilecaption">2</div>
                                                                <h4><i className="fa fa-group"></i> <span id="count-all-occupants-label">Tenants</span></h4>
                                                            </div>
                                                        </div>
                                                        <div className="item text-center active">
                                                            <div className="vertical-center">
                                                                <div id="count-active-occupants" className="tilecaption">4</div>
                                                                <h4><i className="fa fa-group"></i> <span id="count-active-occupants-label">Leases</span></h4>
                                                            </div>
                                                        </div>
                                                        <div className="item text-center">
                                                            <div className="vertical-center">
                                                                <div id="count-inactive-occupants" className="tilecaption">0</div>
                                                                <h4><i className="fa fa-group"></i> <span id="count-inactive-occupants-label">Terminated leases</span></h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-2">
                                            <div className="tile dark blue js-nav-action" data-id="property">
                                                <div className="carousel slide">
                                                    <div className="carousel-inner owl-carousel owl-theme">
                                                        <div className="item text-center">
                                                            <div className="vertical-center" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown" >
                                                                <h4><i className="fa fa-key fa-5x"></i></h4>
                                                                <h3>Properties</h3>
                                                            </div>
                                                        </div>
                                                        <div className="item text-center">
                                                            <div className="vertical-center">
                                                                <div id="count-all-properties" className="tilecaption">4</div>
                                                                <h4><i className="fa fa-key"></i> <span id="count-all-properties-label">Properties</span></h4>
                                                            </div>
                                                        </div>
                                                        <div className="item text-center">
                                                            <div className="vertical-center">
                                                                <div id="count-active-properties" className="tilecaption">4</div>
                                                                <h4><i className="fa fa-key"></i> <span id="count-active-properties-label">Leased</span></h4>
                                                            </div>
                                                        </div>
                                                        <div className="item text-center active">
                                                            <div className="vertical-center">
                                                                <div id="count-inactive-properties" className="tilecaption">0</div>
                                                                <h4><i className="fa fa-key"></i> <span id="count-inactive-properties-label">Availables</span></h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-3 last-col">
                                            <div className="tile grey text-center disabled">
                                                <div className="vertical-center">
                                                    <div id="current-day" className="tilecaption">2nd</div>
                                                    <h4 className="current-month">May 2019</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-3">
                                            <div className="tile blue text-center js-nav-action" data-id="rent">
                                                <div className="carousel slide">
                                                    <div className="carousel-inner owl-carousel owl-theme">
                                                        <div className="item text-center active">
                                                            <div className="vertical-center" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">
                                                                <h4><i className="fa fa-money fa-5x"></i></h4>
                                                                <h3>Rents</h3>
                                                            </div>
                                                        </div>
                                                        <div className="item text-center">
                                                            <div className="vertical-center">
                                                                <div className="tilecurrency"><span id="count-js-total-topay-rents">$428,160.00</span></div>
                                                                <h4 className="current-month">May 2019</h4>
                                                            </div>
                                                        </div>
                                                        <div className="item text-center">
                                                            <div className="vertical-center">
                                                                <div id="count-all-rents" className="tilecaption">4</div>
                                                                <h4 id="count-all-rents-label">Rents</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-2">
                                            <div className="tile green text-center js-nav-action" data-id="rent">
                                                <div className="vertical-center" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">
                                                    <h4>Paid</h4>
                                                    <div className="tilecurrency"><span id="count-total-paid-rents">$0.00</span></div>
                                                    <h4 id="count-paid-rents">0 Rents</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-2">
                                            <div className="tile orange text-center js-nav-action" data-id="rent">
                                                <div className="vertical-center">
                                                    <h4>Not paid</h4>
                                                    <div className="tilecurrency"><span id="count-total-notpaid-rents">-$428,160.00</span></div>
                                                    <h4 id="count-not-paid-rents">4 Rents</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-5 last-col">
                                            <div className="tile dark blue text-center js-nav-action" data-id="owner">
                                                <div className="vertical-center">
                                                    <h4><i className="fa fa-info-circle fa-inverse fa-5x"></i></h4>
                                                    <h3>Landloard</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 last-row">
                                            <div className="tile grey disabled">
                                                <div id="carousel-notifications" className="carousel slide">

                                                    <div className="carousel-inner owl-carousel owl-theme" role="listbox" style={{ marginTop: "-30px" }}>
                                                        <div className="item text-center active">
                                                            <div className="vertical-center" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">
                                                                <h4><i className="fa fa-rss fa-5x"></i></h4>
                                                                <h3>Issue</h3>
                                                            </div>
                                                        </div>

                                                        <div className="item text-center">
                                                            <div className="vertical-center">
                                                                <h2 className="js-user-action" data-id="notificationselector" data-value="d1d880c4f56e4e4328cccdfdd6e67a12"><i className="fa fa-exclamation-triangle "></i> JUMIA ONLINE</h2>
                                                                <h4>There are no documents attached to the lease contract. Is the insurance certficate is missing?</h4>
                                                            </div>
                                                        </div>

                                                        <div className="item text-center">
                                                            <div className="vertical-center">
                                                                <h2 className="js-user-action" data-id="notificationselector" data-value="2d297d12f6e289d9458100a56d438222"><i className="fa fa-exclamation-triangle "></i> GOOGLE Tunisia</h2>
                                                                <h4>There are no documents attached to the lease contract. Is the insurance certficate is missing?</h4>
                                                            </div>
                                                        </div>

                                                        <div className="item text-center">
                                                            <div className="vertical-center">
                                                                <h2 className="js-user-action" data-id="notificationselector" data-value="caacbc211c568fb273194ba09d73677a"><i className="fa fa-exclamation-triangle "></i> MyTek</h2>
                                                                <h4>There are no documents attached to the lease contract. Is the insurance certficate is missing?</h4>
                                                            </div>
                                                        </div>

                                                        <div className="item text-center">
                                                            <div className="vertical-center">
                                                                <h2 className="js-user-action" data-id="notificationselector" data-value="541d11ed4931a902b6a5a915a1c76990"><i className="fa fa-exclamation-triangle "></i> AUCUNE AGENCE</h2>
                                                                <h4>There are no documents attached to the lease contract. Is the insurance certficate is missing?</h4>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <!-- HANDLEBAR TEMPLATES --> */}
                    <script id="notification-list-template" type="text/x-handlebars-template">
                        {/* {{#if notifications}} */}
                        <div className="carousel-inner" role="listbox">
                            <div className="item active text-center">
                                <div className="vertical-center">
                                    <h4><i className="fa fa-rss fa-5x"></i></h4>
                                    <h3>Issue</h3>
                                </div>
                            </div>
                            <div className="item text-center">
                                <div className="vertical-center">
                                    <h2 className="js-user-action" data-id="notificationselector" data-value="{{notificationId}}"></h2>
                                    {/* <h4>{{ description }}</h4> */}
                                </div>
                            </div>
                            {/* {{/each}} */}
                        </div>
                        {/* {{else}} */}
                        <div className="carousel-inner">
                            <div className="item active text-center">
                                <div className="vertical-center">
                                    <h4><i className="fa fa-bullhorn fa-5x"></i></h4>
                                    <h3>Issue</h3>
                                </div>
                            </div>
                            <div className="item text-center">
                                <div className="vertical-center">
                                    <h3>It&#39;s going OK! No problems (^_^)</h3>
                                </div>
                            </div>
                        </div>
                    </script>


                </div>
            </div>
        )
    }
}



DashView.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {})(DashView);
