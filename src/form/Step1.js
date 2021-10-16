import React from "react";
import Slide from 'react-reveal';

class Step1 extends React.Component {
  step1Fields() {
    return []
  }

  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return (
      <Slide right><div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          onKeyPress={this.props.handleKeyPress}
          className={`form-control ${this.props.errorClass(this.props.formErrors.email)}`}
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        <label htmlFor="sellerType">I am a...</label>
        <select 
          className={`form-select form-select-lg mb-3 ${this.props.errorClass(this.props.formErrors.sellerType)}`}
          aria-label=".form-select-lg example" 
          id="sellerType" 
          name="sellerType"
          value={this.props.sellerType}
          onChange={this.props.handleChange}
        >
          <option value="0">Select...</option>
          <option value="1">Seller/Property Owner</option>
          <option value="2">Listing Agent</option>
          <option value="3">Trustee</option>
          <option value="4">Director of a Company</option>
        </select>
      </div></Slide>
    )
  }
}

export default Step1;