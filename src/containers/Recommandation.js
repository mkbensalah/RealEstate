import React, { Component } from 'react'
import Navbar from '../components/dashboard/layout/Navbar';
import Footer from '../components/dashboard/layout/Footer';

export default class Recommandation extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div class="zsg-form-field">
                    <label for="annualIncome">Annual income</label>
                    <div class="zsg-input-overlay_left annualIncome">
                        <div class="zsg-input-overlay-text_left">DTN</div>
                        <input type="tel" id="annualIncome" autocomplete="off" value="70,000" />>
        </div>
                    <p class="zsg-form-error-text">Invalid annual income</p>
                    <div class="zsg-content-component zsg-form-help-text">
                        <span>Calculate by <a href="#">payment</a></span>
                    </div>
                </div>

                <div class="zsg-form-field">
                    <label for="annualIncome">Monthly Debt</label>
                    <div class="zsg-input-overlay_left annualIncome">
                        <div class="zsg-input-overlay-text_left">200 DTN</div>
                        <input type="tel" id="annualIncome" autocomplete="off" value="0,700" />>
        </div>
                    <p class="zsg-form-error-text">Invalid annual income</p>
                </div>

                <div class="zsg-form-field">
                    <label for="annualIncome">Interest rate</label>
                    <div class="zsg-input-overlay_left annualIncome">
                        <div class="zsg-input-overlay-text_left">1.4512</div>
                        <input type="tel" id="annualIncome" autocomplete="off" value="" />>
        </div>
                    <p class="zsg-form-error-text">Invalid Interest</p>
                </div>

                <div class="zsg-form-field">
                    <label for="annualIncome">Home insurance
</label>
                    <div class="zsg-input-overlay_left annualIncome">
                        <div class="zsg-input-overlay-text_left">800 DTN</div>
                        <input type="tel" id="annualIncome" autocomplete="off" value="Enter" />>
        </div>
                    <label for="includePMI">Include Tax</label>                </div>
                <button className="btn btn-lg btn-info">Recommand</button>
                <Footer></Footer>
            </div>
        )
    }
}
