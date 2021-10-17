import React from "react";
import NumberFormat from "react-number-format";
import Slide from 'react-reveal';

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return (
      <Slide right>
        <div className="form-group">
          <label htmlFor="title">Title Company</label>
          <input
            onKeyPress={this.props.handleKeyPress}
            className={`form-control-lg form-control ${this.props.errorClass(this.props.formErrors.title)}`}
            id="title"
            name="title"
            type="text"
            placeholder="Enter Title Company Name"
            value={this.props.title} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <label htmlFor="titleOfficer">Officer Name</label>
          <input
            onKeyPress={this.props.handleKeyPress}
            className={`form-control-lg form-control ${this.props.errorClass(this.props.formErrors.titleOfficer)}`}
            id="titleOfficer"
            name="titleOfficer"
            type="text"
            placeholder="Enter Officer Name"
            value={this.props.titleOfficer} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <label htmlFor="titlePhone">Phone</label>
          <NumberFormat
            onKeyPress={this.props.handleKeyPress}
            className={`form-control-lg form-control ${this.props.errorClass(this.props.formErrors.titlePhone)}`}
            id="titlePhone"
            name="titlePhone"
            type="tel"
            placeholder="Auto-formatting"
            format="(###) ###-####"
            value={this.props.titlePhone} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />

          <label htmlFor="titleEmail">E-mail</label>
          <input
            onKeyPress={this.props.handleKeyPress}
            className={`form-control-lg form-control ${this.props.errorClass(this.props.formErrors.titleEmail)}`}
            id="titleEmail"
            name="titleEmail"
            type="text"
            placeholder="Enter Title Contact Email"
            value={this.props.titleEmail} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <button disabled={!this.props.formIsValid} className="btn btn-success btn-block">Submit</button>
        </div>
      </Slide>


    )
  };
}

export default Step3;