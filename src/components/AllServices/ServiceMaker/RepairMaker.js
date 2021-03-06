import React, {Component} from 'react';

import Aux from '../../hoc/Auxliary'
import { Link } from 'react-router-dom'
import Button from '../../hoc/Button';
import Input from '../../hoc/Input';
import axios from "axios";
import Modal from '../../../components/Modal'

class RepairMaker extends Component {
    constructor(props) {
        super(props);
        this.child = null;
    }
    state = {

        orderForm: {
            repairType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'type', displayValue: 'Type'},
                        {value: 'flees', displayValue: 'Flees'},
                        {value: 'fire', displayValue: 'Fire'},
                        {value: 'electricity', displayValue: 'Electricity'},
                    ]
                },
                value: '',
                validation: {},
                valid: true
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
            damageType: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Damage Type'
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            priceWorker: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Price of one worker'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            minTotalPrice: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'min of Total Price'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            piecesIncluded: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'piecesIncluded', displayValue: 'piecesIncluded'},
                        {value: 'yes', displayValue: 'Yes'},
                        {value: 'no', displayValue: 'No'},
                    ]
                },
                value: '',
                validation: {},
                valid: true
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
            type: 'Repair',
            agenceid:this.props.agId,
            prix: this.state.orderForm.minTotalPrice.value,
            adresse: this.state.orderForm.address.value,
            Description: this.state.orderForm.description.value,

            repairType: this.state.orderForm.repairType.value,
            priceWorker: this.state.orderForm.priceWorker.value,
            damageType: this.state.orderForm.damageType.value,
            minTotalPrice : this.state.orderForm.minTotalPrice.value,
            piecesIncluded: this.state.orderForm.piecesIncluded.value,
            zone: this.state.orderForm.zone.value
        }

        console.log(newUser);

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
                <h4>Enter your Repair Service Data</h4>
                {form}
            </div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {this.child}
                </Modal>
            </Aux>
        );
    }
}


export default RepairMaker;