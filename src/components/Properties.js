import React, { Component } from 'react';
// import Search from '../components/Search'
// import nw from '../asstes/images/new.png'
// import bath from '../asstes/images/bathtub.png'
// import garage from '../asstes/images/garage.png'
// import space from '../asstes/images/space.png'
import feature1 from '../assets/images/feature1.jpg'
// import feature2 from '../asstes/images/feature2.jpg'
// import feature3 from '../asstes/images/feature3.jpg'
// import feature4 from '../asstes/images/feature4.jpg'
// import feature5 from '../asstes/images/feature5.jpg'
// import feature6 from '../asstes/images/feature6.jpg'
// import  '../assets/js/main';



export default class Properties extends Component {

    state = {
        sale: null
    }


    // componentDidMount () {
    //     console.log(this.props);
    //     axios.get( 'https://jsonplaceholder.typicode.com/todos/1' )
    //         .then( response => {
    //             this.setState( { sale: response.data } );
    //             {console.log(this.state.sale["userId"])}
    //         } )
    //         .catch( error => {
    //             this.setState( { error: true } );
    //         } );
    // }

    componentDidMount() {
        AOS.init({
            duration: 800,
            easing: 'slide',
            once: true
        });

        jQuery(document).ready(function ($) {

            "use strict";



            var siteMenuClone = function () {

                $('.js-clone-nav').each(function () {
                    var $this = $(this);
                    $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
                });


                setTimeout(function () {

                    var counter = 0;
                    $('.site-mobile-menu .has-children').each(function () {
                        var $this = $(this);

                        $this.prepend('<span class="arrow-collapse collapsed">');

                        $this.find('.arrow-collapse').attr({
                            'data-toggle': 'collapse',
                            'data-target': '#collapseItem' + counter,
                        });

                        $this.find('> ul').attr({
                            'class': 'collapse',
                            'id': 'collapseItem' + counter,
                        });

                        counter++;

                    });

                }, 1000);

                $('body').on('click', '.arrow-collapse', function (e) {
                    var $this = $(this);
                    if ($this.closest('li').find('.collapse').hasClass('show')) {
                        $this.removeClass('active');
                    } else {
                        $this.addClass('active');
                    }
                    e.preventDefault();

                });

                $(window).resize(function () {
                    var $this = $(this),
                        w = $this.width();

                    if (w > 768) {
                        if ($('body').hasClass('offcanvas-menu')) {
                            $('body').removeClass('offcanvas-menu');
                        }
                    }
                })

                $('body').on('click', '.js-menu-toggle', function (e) {
                    var $this = $(this);
                    e.preventDefault();

                    if ($('body').hasClass('offcanvas-menu')) {
                        $('body').removeClass('offcanvas-menu');
                        $this.removeClass('active');
                    } else {
                        $('body').addClass('offcanvas-menu');
                        $this.addClass('active');
                    }
                })

                // click outisde offcanvas
                $(document).mouseup(function (e) {
                    var container = $(".site-mobile-menu");
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        if ($('body').hasClass('offcanvas-menu')) {
                            $('body').removeClass('offcanvas-menu');
                        }
                    }
                });
            };
            siteMenuClone();


            var sitePlusMinus = function () {
                $('.js-btn-minus').on('click', function (e) {
                    e.preventDefault();
                    if ($(this).closest('.input-group').find('.form-control').val() != 0) {
                        $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
                    } else {
                        $(this).closest('.input-group').find('.form-control').val(parseInt(0));
                    }
                });
                $('.js-btn-plus').on('click', function (e) {
                    e.preventDefault();
                    $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
                });
            };
            // sitePlusMinus();


            // var siteSliderRange = function () {
            //     window.$("#slider-range").slider({
            //         range: true,
            //         min: 0,
            //         max: 100000,
            //         values: [0, 15000],
            //         slide: function (event, ui) {
            //             $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            //         }
            //     });
            //     $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            //         " - $" + $("#slider-range").slider("values", 1));
            // };
            // siteSliderRange();



            var siteCarousel = function () {
                // if ($('.nonloop-block-13').length > 0) {
                //     $('.nonloop-block-13').owlCarousel({
                //         center: false,
                //         items: 1,
                //         loop: true,
                //         stagePadding: 0,
                //         margin: 30,
                //         autoplay: true,
                //         nav: false,
                //         responsive: {
                //             600: {
                //                 margin: 30,

                //                 items: 2
                //             },
                //             1000: {
                //                 margin: 30,
                //                 stagePadding: 0,

                //                 items: 3
                //             },
                //             1200: {
                //                 margin: 30,
                //                 stagePadding: 0,

                //                 items: 4
                //             }
                //         }
                //     });
                // }

                // $('.slide-one-item, .with-dots').owlCarousel({
                //     center: false,
                //     items: 1,
                //     loop: true,
                //     stagePadding: 0,
                //     margin: 0,
                //     autoplay: true,
                //     pauseOnHover: false,
                //     nav: false,
                //     dots: true,
                //     navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
                // });

                // $('.slide-one-item-alt').owlCarousel({
                //     center: false,
                //     items: 1,
                //     loop: true,
                //     stagePadding: 0,
                //     smartSpeed: 700,
                //     margin: 0,
                //     autoplay: true,
                //     pauseOnHover: false,

                // });



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

            // var siteStellar = function () {
            //     window.stellar({
            //         responsive: false,
            //         parallaxBackgrounds: true,
            //         parallaxElements: true,
            //         horizontalScrolling: false,
            //         hideDistantElements: false,
            //         scrollProperty: 'scroll'
            //     });
            // };
            // siteStellar();

            var siteCountDown = function () {

                $('#date-countdown').countdown('2020/10/10', function (event) {
                    var $this = $(this).html(event.strftime(''
                        + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
                        + '<span class="countdown-block"><span class="label">%d</span> days </span>'
                        + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
                        + '<span class="countdown-block"><span class="label">%M</span> min </span>'
                        + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
                });

            };
            siteCountDown();

            var siteDatePicker = function () {

                if ($('.datepicker').length > 0) {
                    $('.datepicker').datepicker();
                }

            };
            siteDatePicker();

            var siteSticky = function () {
                $(".js-sticky-header").sticky({ topSpacing: 0 });
            };
            siteSticky();

            // navigation
            var OnePageNavigation = function () {
                var navToggler = $('.site-menu-toggle');
                $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
                    e.preventDefault();

                    var hash = this.hash;

                    $('html, body').animate({
                        'scrollTop': $(hash).offset().top
                    }, 600, 'easeInOutCirc', function () {
                        window.location.hash = hash;
                    });

                });
            };
            OnePageNavigation();

            var siteScroll = function () {



                $(window).scroll(function () {

                    var st = $(this).scrollTop();

                    if (st > 100) {
                        $('.js-sticky-header').addClass('shrink');
                    } else {
                        $('.js-sticky-header').removeClass('shrink');
                    }

                })

            };
            siteScroll();

        });
    }


    render() {

        //const te = this.state.sale;

        return (
            <section className="sectionpadding10050 featured-properties-area">
                <div class="py-5 bg-light site-section how-it-works" id="howitworks-section">
                    <div class="container">
                        <div class="row mb-5 justify-content-center">
                            <div class="col-md-7 text-center">
                                <h2 class="section-title mb-3">How It Works</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <div class="pr-5">
                                    <span class="custom-icon flaticon-house text-primary"></span>
                                    <h3 class="text-dark">Find Property.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center">
                                <div class="pr-5">
                                    <span class="custom-icon flaticon-coin text-primary"></span>
                                    <h3 class="text-dark">Buy Property.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center">
                                <div class="pr-5">
                                    <span class="custom-icon flaticon-home text-primary"></span>
                                    <h3 class="text-dark">Make Investment.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="site-section" id="properties-section">
                    <div class="container">
                        <div class="row mb-5 align-items-center">
                            <div class="col-md-7 text-left">
                                <h2 class="section-title mb-3">Properties</h2>
                            </div>
                            <div class="col-md-5 text-left text-md-right">
                                <div class="custom-nav1">
                                    <a href="#" class="custom-prev1">Previous</a><span class="mx-3">/</span><a href="#" class="custom-next1">Next</a>
                                </div>
                            </div>
                        </div>

                        <div class="owl-carousel nonloop-block-13 mb-5">

                            <div class="property">
                                <a href="property-single.html">
                                    <img src={require("../assets/images/property_1.jpg")} alt="Image" class="img-fluid"></img>
                                </a>
                                <div class="prop-details p-3">
                                    <div><strong class="price">$3,400,000</strong></div>
                                    <div class="mb-2 d-flex justify-content-between">
                                        <span class="w border-r">6 beds</span>
                                        <span class="w border-r">4 baths</span>
                                        <span class="w">4,250 sqft.</span>
                                    </div>
                                    <div>480 12th, Unit 14, San Francisco, CA</div>
                                </div>
                            </div>

                            <div class="property">
                                <a href="property-single.html">
                                    <img src={require("../assets/images/property_2.jpg")} alt="Image" class="img-fluid"></img>
                                </a>
                                <div class="prop-details p-3">
                                    <div><strong class="price">$3,400,000</strong></div>
                                    <div class="mb-2 d-flex justify-content-between">
                                        <span class="w border-r">6 beds</span>
                                        <span class="w border-r">4 baths</span>
                                        <span class="w">4,250 sqft.</span>
                                    </div>
                                    <div>480 12th, Unit 14, San Francisco, CA</div>
                                </div>
                            </div>

                            <div class="property">
                                <a href="property-single.html">
                                    <img src={require("../assets/images/property_3.jpg")} alt="Image" class="img-fluid"></img>
                                </a>
                                <div class="prop-details p-3">
                                    <div><strong class="price">$3,400,000</strong></div>
                                    <div class="mb-2 d-flex justify-content-between">
                                        <span class="w border-r">6 beds</span>
                                        <span class="w border-r">4 baths</span>
                                        <span class="w">4,250 sqft.</span>
                                    </div>
                                    <div>480 12th, Unit 14, San Francisco, CA</div>
                                </div>
                            </div>

                            <div class="property">
                                <a href="property-single.html">
                                    <img src={require("../assets/images/property_4.jpg")} alt="Image" class="img-fluid"></img>
                                </a>
                                <div class="prop-details p-3">
                                    <div><strong class="price">$3,400,000</strong></div>
                                    <div class="mb-2 d-flex justify-content-between">
                                        <span class="w border-r">6 beds</span>
                                        <span class="w border-r">4 baths</span>
                                        <span class="w">4,250 sqft.</span>
                                    </div>
                                    <div>480 12th, Unit 14, San Francisco, CA</div>
                                </div>
                            </div>

                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-4">
                                <a href="listings.html" class="btn btn-primary btn-block">View All Property Listings</a>
                            </div>
                        </div>
                    </div>
                </div>


                <section class="site-section border-bottom" id="agents-section">
                    <div class="container">
                        <div class="row mb-5">
                            <div class="col-md-7 text-left">
                                <h2 class="section-title mb-3">Agents</h2>
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
                            </div>
                        </div>
                        <div class="row">


                            <div class="col-md-6 col-lg-4 mb-4">
                                <div class="team-member">
                                    <figure>
                                        <ul class="social">
                                            <li><a href="#"><span class="icon-facebook"></span></a></li>
                                            <li><a href="#"><span class="icon-twitter"></span></a></li>
                                            <li><a href="#"><span class="icon-linkedin"></span></a></li>
                                            <li><a href="#"><span class="icon-instagram"></span></a></li>
                                        </ul>
                                        <img src={require("../assets/images/person_5.jpg")} alt="Image" class="img-fluid" />
                                    </figure>
                                    <div class="p-3">
                                        <h3 class="mb-2">Kaiara Spencer</h3>
                                        <span class="position">Real Estate Agent</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 mb-4">
                                <div class="team-member">
                                    <figure>
                                        <ul class="social">
                                            <li><a href="#"><span class="icon-facebook"></span></a></li>
                                            <li><a href="#"><span class="icon-twitter"></span></a></li>
                                            <li><a href="#"><span class="icon-linkedin"></span></a></li>
                                            <li><a href="#"><span class="icon-instagram"></span></a></li>
                                        </ul>
                                        <img src={require("../assets/images/person_6.jpg")} alt="Image" class="img-fluid" />
                                    </figure>
                                    <div class="p-3">
                                        <h3 class="mb-2">Dave Simpson</h3>
                                        <span class="position">Real Estate Agent</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 mb-4">
                                <div class="team-member">
                                    <figure>
                                        <ul class="social">
                                            <li><a href="#"><span class="icon-facebook"></span></a></li>
                                            <li><a href="#"><span class="icon-twitter"></span></a></li>
                                            <li><a href="#"><span class="icon-linkedin"></span></a></li>
                                            <li><a href="#"><span class="icon-instagram"></span></a></li>
                                        </ul>
                                        <img src={require("../assets/images/person_7.jpg")} alt="Image" class="img-fluid" />
                                    </figure>
                                    <div class="p-3">
                                        <h3 class="mb-2">Ben Thompson</h3>
                                        <span class="position">Real Estate Agent</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 mb-4">
                                <div class="team-member">
                                    <figure>
                                        <ul class="social">
                                            <li><a href="#"><span class="icon-facebook"></span></a></li>
                                            <li><a href="#"><span class="icon-twitter"></span></a></li>
                                            <li><a href="#"><span class="icon-linkedin"></span></a></li>
                                            <li><a href="#"><span class="icon-instagram"></span></a></li>
                                        </ul>
                                        <img src={require("../assets/images/person_8.jpg")} alt="Image" class="img-fluid" />
                                    </figure>
                                    <div class="p-3">
                                        <h3 class="mb-2">Kyla Stewart</h3>
                                        <span class="position">Real Estate Agent</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 mb-4">
                                <div class="team-member">
                                    <figure>
                                        <ul class="social">
                                            <li><a href="#"><span class="icon-facebook"></span></a></li>
                                            <li><a href="#"><span class="icon-twitter"></span></a></li>
                                            <li><a href="#"><span class="icon-linkedin"></span></a></li>
                                            <li><a href="#"><span class="icon-instagram"></span></a></li>
                                        </ul>
                                        <img src={require("../assets/images/person_5.jpg")} alt="Image" class="img-fluid" />
                                    </figure>
                                    <div class="p-3">
                                        <h3 class="mb-2">Kaiara Spencer</h3>
                                        <span class="position">Real Estate Agent</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 mb-4">
                                <div class="team-member">
                                    <figure>
                                        <ul class="social">
                                            <li><a href="#"><span class="icon-facebook"></span></a></li>
                                            <li><a href="#"><span class="icon-twitter"></span></a></li>
                                            <li><a href="#"><span class="icon-linkedin"></span></a></li>
                                            <li><a href="#"><span class="icon-instagram"></span></a></li>
                                        </ul>
                                        <img src={require("../assets/images/person_6.jpg")} alt="Image" class="img-fluid" />
                                    </figure>
                                    <div class="p-3">
                                        <h3 class="mb-2">Dave Simpson</h3>
                                        <span class="position">Real Estate Agent</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>


                <section class="site-section" id="about-section">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-6">

                                <div class="owl-carousel slide-one-item-alt">
                                    <img src={require("../assets/images/property_1.jpg")} alt="Image" class="img-fluid" />
                                    <img src={require("../assets/images/property_2.jpg")} alt="Image" class="img-fluid" />
                                    <img src={require("../assets/images/property_3.jpg")} alt="Image" class="img-fluid" />
                                    <img src={require("../assets/images/property_4.jpg")} alt="Image" class="img-fluid" />
                                </div>
                                <div class="custom-direction" style={{ textAlign: "center", left: "15%" }}>
                                    <a href="#" class="custom-prev">Prev</a><a href="#" class="custom-next">Next</a>
                                </div>

                            </div>
                            <div class="col-lg-5 ml-auto">

                                <h2 class="section-title mb-3">We Are The Best RealEstate Company</h2>
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit  Quo suscipit omnis iste velit maxime.</p>

                                <ul class="list-unstyled ul-check success">
                                    <li>Placeat maxime animi minus</li>
                                    <li>Dolore qui placeat maxime</li>
                                    <li>Consectetur adipisicing</li>
                                    <li>Lorem ipsum dolor</li>
                                    <li>Placeat molestias animi</li>
                                </ul>

                                <p><a href="#" class="btn btn-primary mr-2 mb-2">Learn More</a></p>

                            </div>
                        </div>
                    </div>
                </section>



                <section class="site-section border-bottom bg-light" id="services-section">
                    <div class="container">
                        <div class="row mb-5">
                            <div class="col-12 text-center">
                                <h2 class="section-title mb-3">Services</h2>
                            </div>
                        </div>
                        <div class="row align-items-stretch">
                            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                                <div className="unit-4 d-flex" style={{ color: "grey" }}>
                                    <div class="unit-4-icon mr-4"><span class="text-primary flaticon-house"></span></div>
                                    <div>
                                        <h3>Search Property</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="unit-4 d-flex" style={{ color: "grey" }}>
                                    <div class="unit-4-icon mr-4"><span class="text-primary flaticon-coin"></span></div>
                                    <div>
                                        <h3>Buy Property</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="unit-4 d-flex" style={{ color: "grey" }}>
                                    <div class="unit-4-icon mr-4"><span class="text-primary flaticon-home"></span></div>
                                    <div>
                                        <h3>Invest a Home</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="unit-4 d-flex" style={{ color: "grey" }}>
                                    <div class="unit-4-icon mr-4"><span class="text-primary flaticon-flat"></span></div>
                                    <div>
                                        <h3>Post Properties</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="400">
                                <div className="unit-4 d-flex" style={{ color: "grey" }}>
                                    <div class="unit-4-icon mr-4"><span class="text-primary flaticon-location"></span></div>
                                    <div>
                                        <h3>Property Locator</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="500">
                                <div className="unit-4 d-flex" style={{ color: "grey" }}>
                                    <div class="unit-4-icon mr-4"><span class="text-primary flaticon-mobile-phone"></span></div>
                                    <div>
                                        <h3>Stated Apps</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <section class="site-section bg-light bg-image" id="contact-section">
                    <div class="container">
                        <div class="row mb-5">
                            <div class="col-12 text-center">
                                {/* <!-- <h3 class="section-sub-title">Get</h3> --> */}
                                <h2 class="section-title mb-3">Contact Us</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-7 mb-5">



                                <form action="#" class="p-5 bg-white">

                                    <h2 class="h4 text-black mb-5">Contact Form</h2>

                                    <div class="row form-group">
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <label class="text-black" for="fname">First Name</label>
                                            <input type="text" id="fname" class="form-control" />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="text-black" for="lname">Last Name</label>
                                            <input type="text" id="lname" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">

                                        <div class="col-md-12">
                                            <label class="text-black" for="email">Email</label>
                                            <input type="email" id="email" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">

                                        <div class="col-md-12">
                                            <label class="text-black" for="subject">Subject</label>
                                            <input type="subject" id="subject" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label class="text-black" for="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input type="submit" value="Send Message" class="btn btn-primary btn-md text-white" />
                                        </div>
                                    </div>


                                </form>
                            </div>
                            <div class="col-md-5">

                                <div class="p-4 mb-3 bg-white">
                                    <p class="mb-0 font-weight-bold">Address</p>
                                    <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                                    <p class="mb-0 font-weight-bold">Phone</p>
                                    <p class="mb-4"><a href="#">+1 232 3235 324</a></p>

                                    <p class="mb-0 font-weight-bold">Email Address</p>
                                    <p class="mb-0"><a href="#">youremail@domain.com</a></p>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </section>

        )
    }
}