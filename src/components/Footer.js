import React, { Component } from 'react';
// import foote from '../asstes/images/footer.jpg'
// import logo from '../asstes/images/log.png';
// import phone from '../asstes/images/phone-call.png'
// import envelope from '../asstes/images/envelope.png'
// import location from '../asstes/images/location.png'
// import fea from '../asstes/images/fea-product.jpg'

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="mb-5">
                    <h3 className="footer-heading mb-4">About Dari.tn</h3>
                    <p>Find your perfect house</p>
                  </div>
      
                  
                  
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <div className="row mb-5">
                    <div className="col-md-12">
                      <h3 className="footer-heading mb-4">Navigations</h3>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <ul className="list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html">Buy</a></li>
                        <li><a href="index.html">Rent</a></li>
                        <li><a href="index.html">Properties</a></li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <ul className="list-unstyled">
                        <li><a href="index.html">About Us</a></li>
                        <li><a href="index.html">Privacy Policy</a></li>
                        <li><a href="index.html">Contact Us</a></li>
                        <li><a href="index.html">Terms</a></li>
                      </ul>
                    </div>
                  </div>
      
      
                </div>
      
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <h3 className="footer-heading mb-4">Follow Us</h3>
      
                      <div>
                        <a href="index.html" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                        <a href="index.html" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                        <a href="index.html" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                        <a href="index.html#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                      </div>
      
                  
      
                </div>
                
              </div>
              <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                  <p>
                  
                 
                 
                  </p>
                </div>
                
              </div>
            </div>
          </footer>
        )
    }
}