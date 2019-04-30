import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authAction';


import Button from '../components/hoc/Button';
import Input from '../components/hoc/Input';

import '../assets/css/register.css'
import Header from '../components/Header';

class Register extends Component {
    constructor() {
        super();

    }
    componentDidMount() {
        jQuery(document).ready(function () {

            window.$("#form-total").steps({
                headerTag: "h2",
                bodyTag: "section",
                transitionEffect: "fade",
                enableAllSteps: true,
                stepsOrientation: "vertical",
                autoFocus: true,
                transitionEffectSpeed: 500,
                titleTemplate: '<div class="title">#title#</div>',
                labels: {
                    previous: 'Back Step',
                    next: '<i class="zmdi zmdi-arrow-right"></i>',
                    finish: '<i class="zmdi zmdi-check"></i>',
                    current: ''
                },
            })
        })
    }

    // num_patente = {
    //     id: 'num_patente',
    //     config: {
    //         elementType: 'input',
    //         elementConfig: {
    //             type: 'number',
    //             placeholder: 'NUM Patente'
    //         },
    //         value: '',
    //         validation:
    //         {
    //             required: true,
    //             minLength: 4,
    //             maxLength: 4,
    //             isNumeric: true
    //         },
    //         valid: false,
    //         touched: false
    //     }
    // };
    // description = {
    //     id: 'description',
    //     config: {
    //         elementType: 'input',
    //         elementConfig: {
    //             type: 'text',
    //             placeholder: 'description'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     }
    // };
    // cin = {
    //     id: 'CIN',
    //     config: {
    //         elementType: 'input',
    //         elementConfig: {
    //             type: 'number',
    //             placeholder: 'CIN'
    //         },
    //         value: '',
    //         validation:
    //         {
    //             required: true,
    //             minLength: 8,
    //             maxLength: 8,
    //             isNumeric: true
    //         },
    //         valid: false,
    //         touched: false
    //     }
    // };
    // state = {
    //     errors: {},
    //     orderForm: {
    //         type: {
    //             elementType: 'select',
    //             elementConfig: {
    //                 options: [
    //                     { value: 'type', displayValue: 'Type' },
    //                     { value: 'client', displayValue: 'Client' },
    //                     { value: 'agency', displayValue: 'Agency' }
    //                 ]
    //             },
    //             value: '',
    //             validation: {},
    //             valid: true
    //         },

    //         username: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'text',
    //                 placeholder: 'Your Name'
    //             },
    //             value: '',
    //             validation: {
    //                 required: true
    //             },
    //             valid: false,
    //             touched: false
    //         },
    //         email: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'email',
    //                 placeholder: 'Your E-Mail'
    //             },
    //             value: "",
    //             validation: {
    //                 required: true,
    //                 isEmail: true
    //             },
    //             valid: false,
    //             touched: false
    //         },
    //         state: {
    //             elementType: 'select',
    //             elementConfig: {
    //                 options: [
    //                     { value: '0', displayValue: '0' },
    //                     { value: '1', displayValue: '1' },
    //                     { value: '2', displayValue: '2' }
    //                 ]
    //             },
    //             value: '',
    //             validation: {},
    //             valid: true
    //         },
    //         tel: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'number',
    //                 placeholder: 'Phone number'
    //             },
    //             value: '',
    //             validation: {
    //                 required: true,
    //                 minLength: 8,
    //                 maxLength: 8,
    //             },
    //             valid: false,
    //             touched: false
    //         },
    //         password: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'password',
    //                 placeholder: 'Your Password'
    //             },
    //             value: '',
    //             validation: {
    //                 required: true
    //             },
    //             valid: false,
    //             touched: false
    //         },
    //         zipCode: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'number',
    //                 placeholder: 'ZIP Code'
    //             },
    //             value: '',
    //             validation: {
    //                 required: true,
    //                 minLength: 4,
    //                 maxLength: 4,
    //                 isNumeric: true
    //             },
    //             valid: false,
    //             touched: false
    //         },
    //         address: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'text',
    //                 placeholder: 'Address'
    //             },
    //             value: '',
    //             validation: {
    //                 required: true
    //             },
    //             valid: false,
    //             touched: false
    //         },

    //     },
    //     CIN: {
    //         elementType: 'input',
    //         elementConfig: {
    //             type: 'number',
    //             placeholder: 'CIN'
    //         },
    //         value: '',
    //         validation: {
    //             required: true,
    //             minLength: 8,
    //             maxLength: 8,
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     num_patente: {
    //         elementType: 'input',
    //         elementConfig: {
    //             type: 'number',
    //             placeholder: 'NUM Patente'
    //         },
    //         value: '',
    //         validation:
    //         {
    //             required: true,
    //             minLength: 4,
    //             maxLength: 4,
    //             isNumeric: true
    //         },
    //         valid: false,
    //         touched: false
    //     },
    //     description: {
    //         elementType: 'input',
    //         elementConfig: {
    //             type: 'text',
    //             placeholder: 'description'
    //         },
    //         value: '',
    //         validation: {
    //             required: true
    //         },
    //         valid: false,
    //         touched: false
    //     },



    //     formIsValid: true,
    //     loading: false
    // }


    // componentDidMount() {
    //     if (this.props.auth.isAuthenticated) {
    //         this.props.history.push('/dashboard');
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.errors) {
    //         this.setState({ errors: nextProps.errors });
    //     }
    // }

    // orderHandler = (event) => {
    //     event.preventDefault();
    //     this.setState({ loading: true });
    //     const formData = {};
    //     for (let formElementIdentifier in this.state.orderForm) {
    //         formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    //     }

    //     var newUser = {
    //         account_type: this.state.orderForm.type.value,
    //         username: this.state.orderForm.username.value,
    //         email: this.state.orderForm.email.value,
    //         state: this.state.orderForm.state.value,
    //         tel: this.state.orderForm.tel.value,
    //         password: this.state.orderForm.password.value,

    //         cin: this.state.CIN.value,

    //         patente_num: this.state.num_patente.value,
    //         about: this.state.description.value
    //     }

    //     console.log(newUser);
    //     // fire register action form
    //     this.props.registerUser(newUser, this.props.history, this.props.loading);

    // }
    // checkValidity(value, rules) {
    //     let isValid = true;
    //     if (!rules) {
    //         return true;
    //     }

    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid;
    //     }

    //     if (rules.minLength) {
    //         isValid = value.length >= rules.minLength && isValid
    //     }

    //     if (rules.maxLength) {
    //         isValid = value.length <= rules.maxLength && isValid
    //     }

    //     if (rules.isEmail) {
    //         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //         isValid = pattern.test(value) && isValid
    //     }

    //     if (rules.isNumeric) {
    //         const pattern = /^\d+$/;
    //         isValid = pattern.test(value) && isValid
    //     }

    //     return isValid;
    // }
    // inputChangedHandler = (event, inputIdentifier) => {
    //     if (inputIdentifier === 'CIN') {

    //         this.cin.config.value = event.target.value;

    //         this.cin.config.valid = this.checkValidity(this.cin.config.value, this.cin.config.validation);
    //         console.log(this.cin.config.valid);
    //         this.cin.config.touched = true;

    //         let formIsValid = true;

    //         formIsValid = this.cin.config.valid && formIsValid;
    //         this.setState({ CIN: this.cin.config, formIsValid: formIsValid });
    //         //console.log(this.state.CIN)
    //     }
    //     else if (inputIdentifier === 'num_patente') {
    //         this.num_patente.config.value = event.target.value;

    //         this.num_patente.config.valid = this.checkValidity(this.num_patente.config.value, this.num_patente.config.validation);
    //         // console.log(this.num_patente.config.valid );
    //         this.num_patente.config.touched = true;


    //         let formIsValid = true;

    //         formIsValid = this.num_patente.config.valid && formIsValid;
    //         this.setState({ num_patente: this.num_patente.config, formIsValid: formIsValid });
    //         // console.log(this.state.num_patente)
    //     }
    //     else if (inputIdentifier === 'description') {
    //         this.description.config.value = event.target.value;

    //         this.description.config.valid = this.checkValidity(this.description.config.value, this.description.config.validation);
    //         //console.log(this.description.config.valid );
    //         this.description.config.touched = true;


    //         let formIsValid = true;

    //         formIsValid = this.description.config.valid && formIsValid;
    //         this.setState({ description: this.description.config, formIsValid: formIsValid });
    //         //  console.log(this.state.description)
    //     }

    //     else {
    //         const updatedOrderForm = {
    //             ...this.state.orderForm
    //         };
    //         const updatedFormElement = {
    //             ...updatedOrderForm[inputIdentifier]
    //         };

    //         updatedFormElement.value = event.target.value;
    //         updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    //         updatedFormElement.touched = true;
    //         updatedOrderForm[inputIdentifier] = updatedFormElement;

    //         let formIsValid = true;
    //         for (let inputIdentifier in updatedOrderForm) {
    //             formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    //         }


    //         this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    //     }




    // }


    render() {
        // const formElementsArray = [];
        // for (let key in this.state.orderForm) {
        //     formElementsArray.push({
        //         id: key,
        //         config: this.state.orderForm[key]
        //     });
        // }

        // if (this.state.orderForm.type.value === 'client') {
        //     var found = formElementsArray.find(function (element) {
        //         return element.id === 'CIN';
        //     });
        //     if (!found)
        //         formElementsArray.push(this.cin);
        // }
        // else if (this.state.orderForm.type.value === 'agency') {
        //     found = formElementsArray.find(function (element) {
        //         return element.id === 'num_patente';
        //     });
        //     if (!found) {
        //         formElementsArray.push(this.num_patente);
        //         formElementsArray.push(this.description);
        //     }
        // }

        // let form = (
        //     <form onSubmit={this.orderHandler}>

        //         {formElementsArray.map(formElement => (
        //             <Input
        //                 key={formElement.id}
        //                 elementType={formElement.config.elementType}
        //                 elementConfig={formElement.config.elementConfig}
        //                 value={formElement.config.value}
        //                 invalid={!formElement.config.valid}
        //                 shouldValidate={formElement.config.validation}
        //                 touched={formElement.config.touched}
        //                 changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        //         ))}
        //         <Button btnType="Success" disabled={!this.state.formIsValid}>REGISTER</Button>
        //     </form>
        // );

        return (
            // <div classNameName="ContactData">
            //     <h4>Enter your Contact Data</h4>
            //     {form}
            // </div>
            <div>
                <Header theme="#fefefe" isLighten={false} />
                <div className="page-content">

                    <div className="form-v1-content">

                        <div className="wizard-form">
                            <form className="form-register" action="#" method="post">
                                <div id="form-total">
                                    {/* <!-- SECTION 1 --> */}
                                    <h2>
                                        <p className="step-icon"><span>01</span></p>
                                        <span className="step-text">Personal Infomation</span>
                                    </h2>
                                    <section>
                                        <div className="inner">
                                            <div className="wizard-header">
                                                <h3 className="heading">Personal Infomation</h3>
                                                <p>Please enter your infomation and proceed to the next step so we can build your accounts.  </p>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder">
                                                    <fieldset>
                                                        <legend>First Name</legend>
                                                        <input type="text" className="form-control" id="first-name" name="first-name" placeholder="First Name" required />
                                                    </fieldset>
                                                </div>
                                                <div className="form-holder">
                                                    <fieldset>
                                                        <legend>Last Name</legend>
                                                        <input type="text" className="form-control" id="last-name" name="last-name" placeholder="Last Name" required />
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <fieldset>
                                                        <legend>Your Email</legend>
                                                        <input type="text" name="your_email" id="your_email" className="form-control" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="example@email.com" required />
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <fieldset>
                                                        <legend>Phone Number</legend>
                                                        <input type="text" className="form-control" id="phone" name="phone" placeholder="+1 888-999-7777" required />
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="form-row form-row-date">
                                                <div className="form-holder form-holder-2">
                                                    <label className="special-label">Birth Date:</label>
                                                    <select name="month" id="month">
                                                        <option value="MM" disabled selected>MM</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                    </select>
                                                    <select name="date" id="date">
                                                        <option value="DD" disabled selected>DD</option>
                                                        <option value="Feb">Feb</option>
                                                        <option value="Mar">Mar</option>
                                                        <option value="Apr">Apr</option>
                                                        <option value="May">May</option>
                                                    </select>
                                                    <select name="year" id="year">
                                                        <option value="YYYY" disabled selected>YYYY</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2013">2013</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <input type="text" className="form-control input-border" id="ssn" name="ssn" placeholder="SSN" required />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/* <!-- SECTION 2 --> */}
                                    <h2>
                                        <p className="step-icon"><span>02</span></p>
                                        <span className="step-text">Connect Bank Account</span>
                                    </h2>
                                    <section>
                                        <div className="inner">
                                            <div className="wizard-header">
                                                <h3 className="heading">Connect Bank Account</h3>
                                                <p>Please enter your infomation and proceed to the next step so we can build your accounts.</p>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-1">
                                                    <input type="text" name="find_bank" id="find_bank" placeholder="Find Your Bank" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="form-row-total">
                                                <div className="form-row">
                                                    <div className="form-holder form-holder-2 form-holder-3">
                                                        <input type="radio" className="radio" name="bank-1" id="bank-1" value="bank-1" checked />
                                                        <label className="bank-images label-above bank-1-label" for="bank-1">
                                                            <img src={require("../assets/images/biat.png")} alt="bank-1" />
                                                        </label>
                                                        <input type="radio" className="radio" name="bank-2" id="bank-2" value="bank-2" />
                                                        <label className="bank-images label-above bank-2-label" for="bank-2">
                                                            <img src={require("../assets/images/atb.jpg")} alt="bank-2" />
                                                        </label>
                                                        <input type="radio" className="radio" name="bank-3" id="bank-3" value="bank-3" />
                                                        <label className="bank-images label-above bank-3-label" for="bank-3">
                                                            <img src={require("../assets/images/bts.jpg")} alt="bank-3" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-holder form-holder-2 form-holder-3">
                                                        <input type="radio" className="radio" name="bank-4" id="bank-4" value="bank-4" />
                                                        <label className="bank-images bank-4-label" for="bank-4">
                                                            <img src={require("../assets/images/zitouna.jpg")} alt="bank-4" />
                                                        </label>
                                                        <input type="radio" className="radio" name="bank-5" id="bank-5" value="bank-5" />
                                                        <label className="bank-images bank-5-label" for="bank-5">
                                                            <img src={require("../assets/images/amen.jpg")} alt="bank-5" />
                                                        </label>
                                                        <input type="radio" className="radio" name="bank-6" id="bank-6" value="bank-6" />
                                                        <label className="bank-images bank-6-label" for="bank-6">
                                                            <img src={require("../assets/images/atb.jpg")} alt="bank-6" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/* <!-- SECTION 3 --> */}
                                    <h2>
                                        <p className="step-icon"><span>03</span></p>
                                        <span className="step-text">Set Financial Goals</span>
                                    </h2>
                                    <section>
                                        <div className="inner">
                                            <div className="wizard-header">
                                                <h3 className="heading">Set Financial Goals</h3>
                                                <p>Please enter your infomation and proceed to the next step so we can build your accounts.</p>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <input type="radio" className="radio" name="radio1" id="plan-1" value="plan-1" />
                                                    <label className="plan-icon plan-1-label" for="plan-1">
                                                        <img src={require("../assets/images/form-v1-icon-2.png")} alt="pay-1" />
                                                    </label>
                                                    <div className="plan-total">
                                                        <span className="plan-title">Specific Plan</span>
                                                        <p className="plan-text">Pellentesque nec nam aliquam sem et volutpat consequat mauris nunc congue nisi.</p>
                                                    </div>
                                                    <input type="radio" className="radio" name="radio1" id="plan-2" value="plan-2" />
                                                    <label className="plan-icon plan-2-label" for="plan-2">
                                                        <img src={require("../assets/images/form-v1-icon-2.png")} alt="pay-1" />
                                                    </label>
                                                    <div className="plan-total">
                                                        <span className="plan-title">Medium Plan</span>
                                                        <p className="plan-text">Pellentesque nec nam aliquam sem et volutpat consequat mauris nunc congue nisi.</p>
                                                    </div>
                                                    <input type="radio" className="radio" name="radio1" id="plan-3" value="plan-3" checked />
                                                    <label className="plan-icon plan-3-label" for="plan-3">
                                                        <img src={require("../assets/images/form-v1-icon-3.png")} alt="pay-2" />
                                                    </label>
                                                    <div className="plan-total">
                                                        <span className="plan-title">Special Plan</span>
                                                        <p className="plan-text">Pellentesque nec nam aliquam sem et volutpat consequat mauris nunc congue nisi.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));