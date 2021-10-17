import React from 'react';
import ReactDom from 'react-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Slide from 'react-reveal';
import Fade from 'react-reveal';

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      isActive: false,
      currentStep: 1, // Default is Step 1
      email: '',
      sellerType: '',
      occupancy: '',
      escrow: '',
      escrowPhone: '',
      formErrors: {
        email: '',
        sellerType: '',
        occupancy: '',
        escrow: '',
        escrowPhone: '',
      },
      emailValid: false,
      sellerTypeValid: false,
      formValid: false,
      occupancyValid: '',
      escrowValid: '',
      escrowPhoneValid: '',
      stepValid: false
    }

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
    this.errorClass = this.errorClass.bind(this)
  }



  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    }, () => {
      this.validateField(name, value);
    });
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    event.key === 'Enter' && event.preventDefault();
    const { email, sellerType, occupancy, escrow, escrowPhone } = this.state
    alert(`Your registration detail:  
      Email: ${email}
      sellerType: ${sellerType}
      occupancy: ${occupancy}
      escrow: ${escrow}
      escrowPhone: ${escrowPhone}
      `
    )
  }

  handleKeyPress = (event) => {
    event.key === 'Enter' && event.preventDefault();
    console.log(event.type)
    if (event.type == 'phone') {
      console.log(event.type)
    }
  }

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}>
          Previous
        </button>
      )
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    let stepValid = () => {
      if (this.state.currentStep == 1) {
        return this.state.emailValid &&
          this.state.sellerTypeValid &&
          this.state.occupancyValid;
      } else if (this.state.currentStep == 2) {
        return this.state.escrowValid &&
          this.state.escrowPhoneValid;
      }
    }

    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          disabled={!stepValid()}
          onChange={this.stepValid}
          onClick={this._next}>
          Next
        </button>
      )
    }
    // ...else render nothing
    return null;
  }

  validateStep(fields) {
    fields.each((field) => {
      this.validateField(field);
    })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let sellerTypeValid = this.state.sellerTypeValid;
    let occupancyValid = this.state.occupancyValid;
    let escrowValid = this.state.escrowValid;
    let escrowPhoneValid = this.state.escrowPhoneValid;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'sellerType':
        sellerTypeValid = value > 0;
        fieldValidationErrors.sellerType = sellerTypeValid ? '' : ' is invalid';
        break;
      case 'occupancy':
        occupancyValid = value > 0;
        fieldValidationErrors.occupancy = occupancyValid ? '' : ' is invalid';
        break;
      case 'escrow':
        escrowValid = value.length > 0
        fieldValidationErrors.escrow = escrowValid ? '' : ' is invaid';
        break;
      case 'escrowPhone':
        escrowPhoneValid = value.replace(/[^0-9]/g, '').length == 10;
        console.log(value.length)
        fieldValidationErrors.escrowPhone = escrowPhoneValid ? '' : ' is invalid';
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      sellerTypeValid: sellerTypeValid,
      occupancyValid: occupancyValid,
      escrowValid: escrowValid,
      escrowPhoneValid: escrowPhoneValid
    }, this.validateForm);

  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid &&
        this.state.sellerTypeValid &&
        this.state.occupancyValid &&
        this.state.escrowValid &&
        this.state.escrowPhoneValid
    });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'is-invalid');
  }

  render() {
    const state = this.state;
    let title;
    if (this.state.currentStep == 1) {
      title = 'Tell Us About Yourself'
    } else if (this.state.currentStep == 2) {
      title = 'Property Contacts'
    }
    return (
      <React.Fragment>
        <Slide left><div className="MasterForm">
          <div className="progress" style={{ width: '90%' }}>
            <div className="progress-bar" role="progressbar" style={{ width: ((1 / 3) * 100).toString() + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
          </div>

          <h1>{title}</h1>

          Step {this.state.currentStep}

          <form onSubmit={this.handleSubmit}>

              // Render the form steps and pass in the required props
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              stepValid={this.stepValid}
              handleKeyPress={this.handleKeyPress}
              email={this.state.email}
              sellerType={this.state.sellerType}
              formIsValid={this.state.formValid}
              errorClass={this.errorClass}
              formErrors={this.state.formErrors}

            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              stepValid={this.stepValid}
              handleKeyPress={this.handleKeyPress}
              email={this.state.email}
              sellerType={this.state.sellerType}
              escrowPhone={this.state.escrowPhone}
              formIsValid={this.state.formValid}
              errorClass={this.errorClass}
              formErrors={this.state.formErrors}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleKeyPress={this.handleKeyPress}
              formIsValid={this.state.formValid}
              errorClass={this.errorClass}
              formErrors={this.state.formErrors}
              email={this.state.email}
            />
            {this.previousButton}
            {this.nextButton}

          </form>
        </div></Slide>
      </React.Fragment>
    )
  }
}

export default MasterForm;