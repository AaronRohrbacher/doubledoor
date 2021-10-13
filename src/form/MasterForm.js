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
      username: '',
      password: '',
    }

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`)
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
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}>
          Next
        </button>
      )
    }
    // ...else render nothing
    return null;
  }

  render() {
    const state = this.state;
    return (
      <React.Fragment>
        <Slide left><div className="MasterForm">
        <div className="progress" style={{width: '90%'}}>
          <div className="progress-bar" role="progressbar" style={{width: ((1/3) * 100).toString() + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>

          <h1>A Wizard Form!</h1>

          Step {this.state.currentStep}

          <form onSubmit={this.handleSubmit}>

              // Render the form steps and pass in the required props
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              username={this.state.username}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              password={this.state.password}
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