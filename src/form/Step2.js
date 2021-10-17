import React from "react";
import Slide from 'react-reveal';
import NumberFormat from "react-number-format";


class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return (
      <Slide right>
        <div className="form-group">
          <label htmlFor="escrow">Escrow Company</label>
          <input
            onKeyPress={this.props.handleKeyPress}
            className={`form-control-lg form-control  ${this.props.errorClass(this.props.formErrors.escrow)}`}
            id="escrow"
            name="escrow"
            type="text"
            placeholder="Enter Escrow Company Name"
            value={this.props.escrow} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <label htmlFor="escrowOfficer">Officer Name</label>
          <input
            onKeyPress={this.props.handleKeyPress}
            className={`form-control-lg form-control  ${this.props.errorClass(this.props.formErrors.escrowOfficer)}`}
            id="escrowOfficer"
            name="escrowOfficer"
            type="text"
            placeholder="Enter Officer Name"
            value={this.props.escrowOfficer} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <label htmlFor="escrowPhone">Phone Number</label>
          <NumberFormat
            onKeyPress={this.props.handleKeyPress}
            className={`form-control-lg form-control  ${this.props.errorClass(this.props.formErrors.escrowPhone)}`}
            id="escrowPhone"
            name="escrowPhone"
            placeholder="Auto-formatting"
            type="tel"
            format="(###) ###-####"
            value={this.props.escrowPhone} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />

          <label htmlFor="escrowEmail">E-mail</label>
          <input
            onKeyPress={this.props.handleKeyPress}
            className={`form-control-lg form-control  ${this.props.errorClass(this.props.formErrors.escrowEmail)}`}
            id="escrowEmail"
            name="escrowEmail"
            type="text"
            placeholder="Enter Escrow Contact Email"
            value={this.props.escrowEmail} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </div>
      </Slide>
    )
  }
}

export default Step2;