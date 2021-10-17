import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import FormComplete from './FormComplete';
import Slide from 'react-reveal';

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
      escrowOfficer: '',
      escrowEmail: '',
      title: '',
      titlePhone: '',
      titleOfficer: '',
      titleEmail: '',

      formErrors: {
        email: '',
        sellerType: '',
        occupancy: '',
        escrow: '',
        escrowPhone: '',
        escrowOfficer: '',
        escrowEmail: '',
        title: '',
        titlePhone: '',
        titleOfficer: '',
        titleEmail: ''
      },
      emailValid: false,
      sellerTypeValid: false,
      formValid: false,
      occupancyValid: false,
      escrowValid: false,
      escrowPhoneValid: false,
      escrowOfficerValid: false,
      escrowEmailValid: false,
      titleValid: false,
      titlePhoneValid: false,
      titleOfficerValid: false,
      titleEmailValid: false,
      stepValid: false,
      complete: false
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
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    }, () => {
      this.validateField(name, value);
    });
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    this.setState({
      complete: true,
      currentStep: 0
    });
    event.preventDefault();
    event.key === 'Enter' && event.preventDefault();

  }

  handleKeyPress = (event) => {
    event.key === 'Enter' && event.preventDefault();
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
          this.state.escrowPhoneValid &&
          this.state.escrowEmailValid &&
          this.state.escrowOfficerValid;
      } else if (this.state.currentStep == 3) {
        return this.state.titleValid &&
          this.state.titlePhoneValid &&
          this.state.titleEmailValid &&
          this.state.titleOfficerValid;
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
    let escrowOfficerValid = this.state.escrowOfficerValid;
    let escrowEmailValid = this.state.escrowEmailValid;
    let titleValid = this.state.titleValid;
    let titlePhoneValid = this.state.titlePhoneValid;
    let titleOfficerValid = this.state.titleOfficerValid;
    let titleEmailValid = this.state.titleEmailValid;

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
        fieldValidationErrors.escrowPhone = escrowPhoneValid ? '' : ' is invalid';
        break;
      case 'escrowEmail':
        escrowEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.escrowEmail = escrowEmailValid ? '' : ' is invalid';
        break;
      case 'escrowOfficer':
        escrowOfficerValid = value.length > 0;
        fieldValidationErrors.escrowOfficer = escrowOfficerValid ? '' : ' is invalid';
      case 'title':
        titleValid = value.length > 0
        fieldValidationErrors.title = titleValid ? '' : ' is invaid';
        break;
      case 'titlePhone':
        titlePhoneValid = value.replace(/[^0-9]/g, '').length == 10;
        fieldValidationErrors.titlePhone = titlePhoneValid ? '' : ' is invalid';
        break;
      case 'titleEmail':
        titleEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.titleEmail = titleEmailValid ? '' : ' is invalid';
        break;
      case 'titleOfficer':
        titleOfficerValid = value.length > 0;
        fieldValidationErrors.titleOfficer = titleOfficerValid ? '' : ' is invalid';

      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      sellerTypeValid: sellerTypeValid,
      occupancyValid: occupancyValid,
      escrowValid: escrowValid,
      escrowPhoneValid: escrowPhoneValid,
      escrowOfficerValid: escrowOfficerValid,
      escrowEmailValid: escrowEmailValid,
      titleValid: titleValid,
      titlePhoneValid: titlePhoneValid,
      titleOfficerValid: titleOfficerValid,
      titleEmailValid: titleEmailValid


    }, this.validateForm);

  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid &&
        this.state.sellerTypeValid &&
        this.state.occupancyValid &&
        this.state.escrowValid &&
        this.state.escrowPhoneValid &&
        this.state.escrowEmailValid &&
        this.state.escrowOfficerValid &&
        this.state.titleValid &&
        this.state.titlePhoneValid &&
        this.state.titleEmailValid &&
        this.state.titleOfficerValid

    });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'is-invalid');
  }

  render() {
    const state = this.state;
    let progress = ((this.state.currentStep - 1) / 3) * 100
    if (this.state.complete == true) {
      progress = 100;
    }
    let title;
    if (this.state.currentStep == 1) {
      title = 'Tell Us About Yourself'
    } else if (this.state.currentStep == 2) {
      title = 'Property Escrow Contacts'
    } else if (this.state.currentStep == 3) {
      title = 'Property Title Contacts'
    }
    return (
      <React.Fragment>
        <Slide left><div className="MasterForm">
          <div className="progress" style={{ width: '90%', margin: '0 auto', marginBottom: '30px' }}>
            <div className="progress-bar" role="progressbar" style={{ width: progress.toString() + '%'}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{Math.round(progress)}%</div>
          </div>
          Step {this.state.currentStep}
          <h1>{title}</h1><br />
          <form onSubmit={this.handleSubmit}>
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
              occupancy={this.state.occupancy}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              stepValid={this.stepValid}
              handleKeyPress={this.handleKeyPress}
              email={this.state.email}
              sellerType={this.state.sellerType}
              escrow={this.state.escrow}
              escrowOfficer={this.state.escrowOfficer}
              escrowPhone={this.state.escrowPhone}
              escrowEmail={this.state.escrowEmail}
              formIsValid={this.state.formValid}
              errorClass={this.errorClass}
              formErrors={this.state.formErrors}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              stepValid={this.stepValid}
              handleKeyPress={this.handleKeyPress}
              email={this.state.email}
              sellerType={this.state.sellerType}
              title={this.state.title}
              titleOfficer={this.state.titleOfficer}
              titlePhone={this.state.titlePhone}
              titleEmail={this.state.titleEmail}
              formIsValid={this.state.formValid}
              errorClass={this.errorClass}
              formErrors={this.state.formErrors}
              complete={this.state.complete}
            /><br />

            {this.previousButton}
            {this.nextButton}

            <br />
            <FormComplete
              email={this.state.email}
              sellerType={this.state.sellerType}
              occupancy={this.state.occupancy}
              escrow={this.state.escrow}
              escrowPhone={this.state.escrowPhone}
              escrowOfficer={this.state.escrowOfficer}
              escrowEmail={this.state.escrowEmail}
              title={this.state.title}
              titlePhone={this.state.titlePhone}
              titleOfficer={this.state.titleOfficer}
              titleEmail={this.state.titleEmail}
              complete={this.state.complete}
            />

          </form>
        </div></Slide>
      </React.Fragment>
    )
  }
}

export default MasterForm;