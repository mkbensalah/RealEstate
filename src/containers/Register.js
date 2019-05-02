import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authAction';
import classnames from 'classnames';


import Button from '../components/hoc/Button';
import Input from '../components/hoc/Input';

import '../assets/css/register.css'
import Header from '../components/Header';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            birthDate: '',
            bank: '',
            plan: '',
            cin: '',
            licence: '',
            terms: '',
            errors: {
                // name: "fix this error",
                // email: "fix this error",
                // phone: "fix this error",
                // password: "fix this error",
                // birthDate: "fix this error",
                // bank: "fix this error",
                // plan: "fix this error"
                // licence: "fix this error"
                // cin: "fix this error"
            }
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        jQuery(document).ready(() => {

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

            var form = $('.btn-info');
            var submitBtn = $('a[href="#finish"]');
            submitBtn.on("click", function () {
                form.click();
            });

            $('#inner').hide();

            var accountTypeBtn = $('.btn-outline-primary');
            accountTypeBtn.on('click', function (e) {
                $(e.target).addClass("active");
                if (accountTypeBtn.get(0) != e.target) {
                    $('#section4').hide();
                    $('#form-total-t-3').hide();
                    $('#inner').show();
                    console.log($('input[name=cin]'))
                    $('input[name=cin]').prop('required', false);
                    $('input[name=licence]').prop('required', false);

                    $(accountTypeBtn.get(0)).removeClass("active");
                }
                else {
                    $('#section4').show();
                    $('#form-total-t-3').show();
                    $('#inner').hide();
                    $('input[name=cin]').prop('required', true);
                    $('input[name=licence]').prop('required', true);

                    $(accountTypeBtn.get(1)).removeClass("active");
                }
            })

            $('input').on("focus", (e) => {
                $(e.target).removeClass("is-invalid");
            })

            $('input').on("change", (e) => {
                this.setState({ [e.target.name]: e.target.value });
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


    onChange(e) {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }


    onSubmit(event) {
        event.preventDefault();
        console.log("hey");
        this.setState({ loading: true });
        const formData = {};
        // for (let formElementIdentifier in this.state.orderForm) {
        //     formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        // }


        var newUser = {
            account_type: $($('.btn-outline-primary').get(0)).hasClass('active') ? "agent" : "client",
            username: this.state.firstName + " " + this.state.lastName,
            email: this.state.email,
            state: $('input[name=radio1]:checked').val(),
            tel: this.state.phone,
            password: this.state.password,
            bank: this.state.bank,

            cin: this.state.cin,

            patente_num: this.state.licence,

        }

        if (!($("input[type=checkbox]").prop("checked"))) {
            this.setState({ errors: { name: "required" } });
            alert("Accept terms and conditions")
        }
        console.log(newUser);
        console.log(this.state);

        // fire register action form
        this.props.registerUser(newUser, this.props.history, this.props.loading);

    }
    //     checkValidity(value, rules) {
    //         let isValid = true;
    //         if (!rules) {
    //             return true;
    //         }

    //         if (rules.required) {
    //             isValid = value.trim() !== '' && isValid;
    //         }

    //         if (rules.minLength) {
    //             isValid = value.length >= rules.minLength && isValid
    //         }

    //         if (rules.maxLength) {
    //             isValid = value.length <= rules.maxLength && isValid
    //         }

    //         if (rules.isEmail) {
    //             const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //             isValid = pattern.test(value) && isValid
    //         }

    //         if (rules.isNumeric) {
    //             const pattern = /^\d+$/;
    //             isValid = pattern.test(value) && isValid
    //         }

    //         return isValid;
    //     }
    //     inputChangedHandler = (event, inputIdentifier) => {
    //         if (inputIdentifier === 'CIN') {

    //             this.cin.config.value = event.target.value;

    //             this.cin.config.valid = this.checkValidity(this.cin.config.value, this.cin.config.validation);
    //             console.log(this.cin.config.valid);
    //             this.cin.config.touched = true;

    //             let formIsValid = true;

    //             formIsValid = this.cin.config.valid && formIsValid;
    //             this.setState({ CIN: this.cin.config, formIsValid: formIsValid });
    //             //console.log(this.state.CIN)
    //         }
    //         else if (inputIdentifier === 'num_patente') {
    //             this.num_patente.config.value = event.target.value;

    //             this.num_patente.config.valid = this.checkValidity(this.num_patente.config.value, this.num_patente.config.validation);
    //             // console.log(this.num_patente.config.valid );
    //             this.num_patente.config.touched = true;


    //             let formIsValid = true;

    //             formIsValid = this.num_patente.config.valid && formIsValid;
    //             this.setState({ num_patente: this.num_patente.config, formIsValid: formIsValid });
    //             // console.log(this.state.num_patente)
    //         }
    //         else if (inputIdentifier === 'description') {
    //             this.description.config.value = event.target.value;

    //             this.description.config.valid = this.checkValidity(this.description.config.value, this.description.config.validation);
    //             //console.log(this.description.config.valid );
    //             this.description.config.touched = true;


    //             let formIsValid = true;

    //             formIsValid = this.description.config.valid && formIsValid;
    //             this.setState({ description: this.description.config, formIsValid: formIsValid });
    //             //  console.log(this.state.description)
    //         }

    //         else {
    //             const updatedOrderForm = {
    //                 ...this.state.orderForm
    //             };
    //             const updatedFormElement = {
    //                 ...updatedOrderForm[inputIdentifier]
    //             };

    //             updatedFormElement.value = event.target.value;
    //             updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    //             updatedFormElement.touched = true;
    //             updatedOrderForm[inputIdentifier] = updatedFormElement;

    //             let formIsValid = true;
    //             for (let inputIdentifier in updatedOrderForm) {
    //                 formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    //             }


    //             this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    //         }




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

        const { errors } = this.state;

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
                            <form className="form-register" onSubmit={this.onSubmit}>
                                <div id="form-total">

                                    <div className="btn-group" role="group" aria-label="Basic example" style={{ marginTop: "20px" }}>
                                        <button type="button" className="btn btn-outline-primary active" style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}>Agent</button>
                                        <button type="button" className="btn btn-outline-primary" style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>Client</button>
                                    </div>
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
                                                        <input type="text" className={classnames('form-control form-control-lg', {
                                                            'is-invalid': errors.name
                                                        })} id="first-name" name="firstName" placeholder="First Name"
                                                            value={this.state.firstName}
                                                            onChange={this.onChange}
                                                            required />
                                                        {errors.name && (
                                                            <div className="invalid-feedback">{errors.name}</div>
                                                        )}
                                                    </fieldset>
                                                </div>
                                                <div className="form-holder">
                                                    <fieldset>
                                                        <legend>Last Name</legend>
                                                        <input type="text" className={classnames('form-control form-control-lg', {
                                                            'is-invalid': errors.name
                                                        })} id="last-name" name="lastName" placeholder="Last Name"
                                                            value={this.state.firstName}
                                                            onChange={this.onChange}
                                                            required />
                                                        {errors.name && (
                                                            <div className="invalid-feedback">{errors.name}</div>
                                                        )}
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <fieldset>
                                                        <legend>Your Email</legend>
                                                        <input type="text" name="email" id="your_email" className={classnames('form-control form-control-lg', {
                                                            'is-invalid': errors.email
                                                        })} pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="example@email.com"
                                                            value={this.state.email}
                                                            onChange={this.onChange}
                                                            required />
                                                        {errors.email && (
                                                            <div className="invalid-feedback">{errors.email}</div>
                                                        )}
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <fieldset>
                                                        <legend>Phone Number</legend>
                                                        <input type="number" className={classnames('form-control form-control-lg', {
                                                            'is-invalid': errors.phone
                                                        })} id="phone" name="phone" placeholder="+1 888-999-7777"
                                                            value={this.state.phone}
                                                            onChange={this.onChange}
                                                            required />
                                                        {errors.phone && (
                                                            <div className="invalid-feedback">{errors.phone}</div>
                                                        )}
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="form-row form-row-date">
                                                <div className="form-holder form-holder-2">
                                                    <label className="special-label">Birth Date:</label>
                                                    <select name="month" id="month">
                                                        <option value="MM" disabled defaultValue>MM</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                    </select>
                                                    <select name="date" id="date">
                                                        <option value="DD" disabled defaultValue>DD</option>
                                                        <option value="Feb">Feb</option>
                                                        <option value="Mar">Mar</option>
                                                        <option value="Apr">Apr</option>
                                                        <option value="May">May</option>
                                                    </select>
                                                    <select name="year" id="year">
                                                        <option value="YYYY" disabled defaultValue>YYYY</option>
                                                        <option value="2017">1987</option>
                                                        <option value="2016">1988</option>
                                                        <option value="2015">1985</option>
                                                        <option value="2014">1984</option>
                                                        <option value="2013">1983</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <input type="password" className={classnames('form-control form-control-lg', {
                                                        'is-invalid': errors.password
                                                    })} id="password" name="password" placeholder="Password"
                                                        value={this.state.password}
                                                        onChange={this.onChange}
                                                        required />
                                                    {errors.password && (
                                                        <div className="invalid-feedback">{errors.password}</div>
                                                    )}
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
                                                    <input type="text" name="bank" id="bank" placeholder="Find Your Bank" className={classnames('form-control form-control-lg', {
                                                        'is-invalid': errors.bank
                                                    })} value={this.state.bank}
                                                        onChange={this.onChange}
                                                        required />
                                                    {errors.bank && (
                                                        <div className="invalid-feedback">{errors.bank}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="form-row-total">
                                                <div className="form-row">
                                                    <div className="form-holder form-holder-2 form-holder-3">
                                                        <input type="radio" className="radio" name="bank-1" id="bank-1" value="bank-1" checked />
                                                        <label className="bank-images label-above bank-1-label" htmlFor="bank-1">
                                                            <img src={require("../assets/images/biat.png")} alt="bank-1" />
                                                        </label>
                                                        <input type="radio" className="radio" name="bank-2" id="bank-2" value="bank-2" />
                                                        <label className="bank-images label-above bank-2-label" htmlFor="bank-2">
                                                            <img src={require("../assets/images/atb.jpg")} alt="bank-2" />
                                                        </label>
                                                        <input type="radio" className="radio" name="bank-3" id="bank-3" value="bank-3" />
                                                        <label className="bank-images label-above bank-3-label" htmlFor="bank-3">
                                                            <img src={require("../assets/images/bts.jpg")} alt="bank-3" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-holder form-holder-2 form-holder-3">
                                                        <input type="radio" className="radio" name="bank-4" id="bank-4" value="bank-4" />
                                                        <label className="bank-images bank-4-label" htmlFor="bank-4">
                                                            <img src={require("../assets/images/zitouna.jpg")} alt="bank-4" />
                                                        </label>
                                                        <input type="radio" className="radio" name="bank-5" id="bank-5" value="bank-5" />
                                                        <label className="bank-images bank-5-label" htmlFor="bank-5">
                                                            <img src={require("../assets/images/amen.jpg")} alt="bank-5" />
                                                        </label>
                                                        <input type="radio" className="radio" name="bank-6" id="bank-6" value="bank-6" />
                                                        <label className="bank-images bank-6-label" htmlFor="bank-6">
                                                            <img src={require("../assets/images/tijari.jpg")} alt="bank-6" />
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
                                                    <input type="radio" className="radio" name="radio1" id="plan-1" value="1" />
                                                    <label className="plan-icon plan-1-label" htmlFor="plan-1">
                                                        <img src={require("../assets/images/form-v1-icon-2.png")} alt="pay-1" />
                                                    </label>
                                                    <div className="plan-total">
                                                        <span className="plan-title">Specific Plan</span>
                                                        <p className="plan-text">Pellentesque nec nam aliquam sem et volutpat consequat mauris nunc congue nisi.</p>
                                                    </div>
                                                    <input type="radio" className="radio" name="radio1" id="plan-2" value="2" />
                                                    <label className="plan-icon plan-2-label" htmlFor="plan-2">
                                                        <img src={require("../assets/images/form-v1-icon-2.png")} alt="pay-1" />
                                                    </label>
                                                    <div className="plan-total">
                                                        <span className="plan-title">Medium Plan</span>
                                                        <p className="plan-text">Pellentesque nec nam aliquam sem et volutpat consequat mauris nunc congue nisi.</p>
                                                    </div>
                                                    <input type="radio" className="radio" name="radio1" id="plan-3" value="3" checked />
                                                    <label className="plan-icon plan-3-label" htmlFor="plan-3">
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
                                    {/* <!-- SECTION 4 --> */}
                                    <h2 id="section4-link">
                                        <p className="step-icon"><span>04</span></p>
                                        <span className="step-text">Additional Info</span>
                                    </h2>
                                    <section>
                                        <div id="section4">
                                            <div className="inner">
                                                <div className="wizard-header">
                                                    <h3 className="heading">Additional Info</h3>
                                                    <p>Please enter your infomation and proceed to finish.</p>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-holder">
                                                        <fieldset>
                                                            <legend>CIN Number</legend>
                                                            <input type="number" className={classnames('form-control form-control-lg', {
                                                                'is-invalid': errors.cin
                                                            })} id="cin" name="cin" placeholder="ex: 09998989"
                                                                value="00000000"
                                                                onChange={this.onChange}
                                                                required />
                                                            {errors.cin && (
                                                                <div className="invalid-feedback">{errors.cin}</div>
                                                            )}
                                                        </fieldset>
                                                    </div>
                                                    <div className="form-holder">
                                                        <fieldset>
                                                            <legend>Trade license</legend>
                                                            <input type="number" className={classnames('form-control form-control-lg', {
                                                                'is-invalid': errors.license
                                                            })} id="licence" name="licence" placeholder="Licence Number"
                                                                value={this.state.license}
                                                                onChange={this.onChange}
                                                                required />
                                                            {errors.license && (
                                                                <div className="invalid-feedback">{errors.license}</div>
                                                            )}
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner" id="inner">
                                            <div className="wizard-header">
                                                <h3 className="heading">Get Started</h3>
                                                <p>By accepting licence terms you will start using our services now!</p>
                                            </div>
                                        </div>
                                        <div className="was-validated" style={{ marginTop: "12px", marginRight: "150px" }}>
                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                                                <label className="custom-control-label" htmlFor="customControlValidation1">Accept our terms & conditions</label>
                                                {errors.terms && (<div className="invalid-feedback" >Example invalid feedback text</div>)}
                                            </div></div>
                                    </section>
                                    <input type="submit" hidden className="btn btn-info btn-block mt-4" />
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