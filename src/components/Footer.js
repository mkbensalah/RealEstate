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
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-5">
                  <h2 class="footer-heading mb-4">About Dari.tn</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                </div>
                <div class="col-md-3 ml-auto">
                  <h2 class="footer-heading mb-4">Quick Links</h2>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-4">
                <h2 class="footer-heading mb-4">Subscribe Newsletter</h2>
                <form action="#" method="post" class="footer-subscribe">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"></input>
                    <div class="input-group-append">
                      <button class="btn btn-primary text-black" type="button" id="button-addon2">Send</button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="">
                <h2 class="footer-heading mb-4">Follow Us</h2>
                <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
              </div>


            </div>
          </div>
          <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
              <div class="border-top pt-5">
                <p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |  Made with <i class="icon-heart" aria-hidden="true"></i> by <a href="#" target="_blank" >INSAT Lab</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </footer>

    )
  }
}