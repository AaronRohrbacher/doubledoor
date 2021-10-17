import React from "react";
import NumberFormat from "react-number-format";
import Slide from 'react-reveal';

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
            className={`form-control ${this.props.errorClass(this.props.formErrors.escrow)}`}
            id="escrow"
            name="escrow"
            type="text"
            placeholder="Enter Escrow Company Name"
            value={this.props.escrow} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
\          <NumberFormat
            onKeyPress={this.props.handleKeyPress}
            className={`form-control ${this.props.errorClass(this.props.formErrors.escrowPhone)}`}
            id="escrowPhone"
            name="escrowPhone"
            type="tel"
            format="(###) ###-####" 
            value={this.props.escrowPhone} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />

        </div>
      </Slide>


    )
  };
}

export default Step2;