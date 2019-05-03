import React, {Component} from 'react';

import Aux from '../../hoc/Auxliary'
import { Link } from 'react-router-dom'
import Button from '../../hoc/Button';
import Input from '../../hoc/Input';
import axios from "axios";
import Modal from '../../../components/Modal'

class AdvertisingMaker extends Component {
    constructor(props) {
        super(props);
        this.child = null;
    }
    state = {

        orderForm: {
            advertisingType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'types of Advertising Agencies', displayValue: 'Types of Advertising Agencies'},
                        {value: 'traditional', displayValue: 'Traditional'},
                        {value: 'branding', displayValue: 'Branding'},
                        {value: 'designFocused', displayValue: 'Design Focused'},
                        {value: 'mediaBuying', displayValue: 'Media Buying'},
                    ]
                },
                value: '',
                validation: {},
                valid: true
            },
            marketingManagement: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Marketing Management', displayValue: 'Marketing Management'},
                        {value: 'weekly', displayValue: 'Weekly'},
                        {value: 'monthly ', displayValue: 'Monthly '},
                        {value: 'quarterly', displayValue: 'Quarterly'},
                        {value: 'yearly', displayValue: 'Yearly'},
                    ]
                },
                value: '',
                validation: {},
                valid: true
            },
            price: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Price'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zone'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            description: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: true,
        loading: false,
        purchasing: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        var index = 0
        var newUser = {
            type: 'Advertising',
            agenceid:this.props.agId,
            prix: this.state.orderForm.price.value,
            adresse: this.state.orderForm.address.value,
            Description: this.state.orderForm.description.value,

            advertisingType: this.state.orderForm.advertisingType.value,
            marketingManagement: this.state.orderForm.marketingManagement.value,
            price: this.state.orderForm.price.value,
            zone: this.state.orderForm.zone.value
        }

        console.log(index);

        axios.post('http://localhost:5000/api/service', newUser)
            .then(response => {
                this.setState({ loading: false });
                console.log(newUser);
                // this.props.history.push('/');
                // this.props.red();
                //    console.log(response.data);
                this.child = (
                    <Aux>
                        <div >
                            <h6 style={{color: '#5c9210'}}>One Service Added With Success !</h6>
                            <Button btnType="Success" style={{color: '#f44336'}} disabled={!this.state.formIsValid} ><Link to={'/dashboard'}> CONTINUE</Link></Button>
                        </div>
                    </Aux>
                )
                this.setState({ purchasing: true });
            })
            .catch(error => {
                this.setState({ loading: false });
                console.log(error);
            });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }


        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }


    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }


        let form = (
            <form onSubmit={this.orderHandler}>

                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>REGISTER</Button>
            </form>
        );

        return (
            <Aux>
            <div className="ContactData">
                <h4>Enter your Advertising Service Data</h4>
                {form}
            </div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {this.child}
                </Modal>
            </Aux>
        );
    }
}


export default AdvertisingMaker;