import React, {Component} from 'react';


import Button from '../../hoc/Button';
import Input from '../../hoc/Input';
import axios from "axios";

class BuilderMaker extends Component {

    state = {

        orderForm: {
            buildingtype: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'type', displayValue: 'Type'},
                        {value: 'building', displayValue: 'Building'},
                        {value: 'home', displayValue: 'Home'},
                        {value: 'extension', displayValue: 'Extension'},
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
            maxArea: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'max Area'
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            workerNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Number of Worker'
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
            decoration: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'decoration', displayValue: 'Decoration'},
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
        loading: false
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
            type: 'Builder',
            agenceid:this.props.agId,
            prix: this.state.orderForm.minTotalPrice.value,
            adresse: this.state.orderForm.address.value,
            Description: this.state.orderForm.description.value,

            buildingType: this.state.orderForm.buildingtype.value,
            workerNumber: this.state.orderForm.workerNumber.value,
            priceWorker: this.state.orderForm.priceWorker.value,
            maxArea: this.state.orderForm.maxArea.value,
            minTotalPrice : this.state.orderForm.minTotalPrice.value,
            decoration: this.state.orderForm.decoration.value,
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
            <div className="ContactData">
                <h4>Enter your Builder Service Data</h4>
                {form}
            </div>
        );
    }
}


export default BuilderMaker;