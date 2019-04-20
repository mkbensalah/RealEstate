import React, { Component } from 'react';


import Button from './hoc/Button';
import Input from './hoc/Input';

import axios from 'axios';

class Register extends Component {
    num_patente =  {
        id: 'num_patente',
        config: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'NUM Patente'
            },
            value: '',
            validation:
                {
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                    isNumeric: true
                },
            valid: false,
            touched: false}
    };
    description = {
        id: 'description',
        config: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'description'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false}
    };
    cin = {
        id: 'CIN',
        config: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'CIN'
            },
            value: '',
            validation:
                {
                    required: true,
                    minLength: 8,
                    maxLength: 8,
                    isNumeric: true
                },
            valid: false,
            touched: false}
    };
    state = {
        orderForm: {
            type: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'type', displayValue: 'Type' },
                        { value: 'client', displayValue: 'Client' },
                        { value: 'agency', displayValue: 'Agency' }
                    ]
                },
                value: '',
                validation: {},
                valid: true
            },

            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: "",
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            state: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: '0', displayValue: '0' },
                        { value: '1', displayValue: '1' },
                        { value: '2', displayValue: '2' }
                    ]
                },
                value: '',
                validation: {},
                valid: true
            },
            tel: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Phone number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 8,
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                    isNumeric: true
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

        },
        CIN: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'CIN'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8,
                maxLength: 8,
            },
            valid: false,
            touched: false
        },
        num_patente: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'NUM Patente'
            },
            value: '',
            validation:
                {
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                    isNumeric: true
                },
            valid: false,
            touched: false},
        description: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'description'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
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

        var newUser = {
            account_type: this.state.orderForm.type.value,
            username: this.state.orderForm.username.value,
            email: this.state.orderForm.email.value,
            state: this.state.orderForm.state.value,
            tel: this.state.orderForm.tel.value, 
            password: this.state.orderForm.password.value,
           
            cin: this.state.CIN.value,

            patente_num: this.state.num_patente.value,
            about: this.state.description.value
        }

        console.log(newUser);

        axios.post('http://localhost:5000/api/users/register', newUser)
            .then(response => {
                this.setState({ loading: false });
                // this.props.history.push('/');
                this.props.red();
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
        if(inputIdentifier === 'CIN'){


            this.cin.config.value = event.target.value;

            this.cin.config.valid = this.checkValidity(this.cin.config.value, this.cin.config.validation);
            console.log(this.cin.config.valid );
            this.cin.config.touched = true;


            let formIsValid = true;

                formIsValid = this.cin.config.valid && formIsValid;
            this.setState({ CIN: this.cin.config, formIsValid: formIsValid });
            //console.log(this.state.CIN)
        }
        else if(inputIdentifier === 'num_patente'){
            this.num_patente.config.value = event.target.value;

            this.num_patente.config.valid = this.checkValidity(this.num_patente.config.value, this.num_patente.config.validation);
           // console.log(this.num_patente.config.valid );
            this.num_patente.config.touched = true;


            let formIsValid = true;

            formIsValid = this.num_patente.config.valid && formIsValid;
            this.setState({ num_patente: this.num_patente.config, formIsValid: formIsValid });
           // console.log(this.state.num_patente)
        }
        else if(inputIdentifier === 'description'){
            this.description.config.value = event.target.value;

            this.description.config.valid = this.checkValidity(this.description.config.value, this.description.config.validation);
            //console.log(this.description.config.valid );
            this.description.config.touched = true;


            let formIsValid = true;

            formIsValid = this.description.config.valid && formIsValid;
            this.setState({ description: this.description.config, formIsValid: formIsValid });
          //  console.log(this.state.description)
        }

else{
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


        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });}




    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        if( this.state.orderForm.type.value === 'client'){
            var found = formElementsArray.find(function(element) {
                return element.id === 'CIN';
            });
         if( !found)
            formElementsArray.push(this.cin);
        }
        else if (this.state.orderForm.type.value === 'agency'){
            found = formElementsArray.find(function(element) {
                return element.id === 'num_patente';
            });
            if( !found)
            {
                formElementsArray.push(this.num_patente);
                formElementsArray.push(this.description);
            }
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
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>REGISTER</Button>
            </form>
        );

        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}



export default Register;