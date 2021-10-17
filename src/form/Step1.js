import React from "react";
import Slide from 'react-reveal';

class Step1 extends React.Component {

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
          className={`form-control-lg form-control ${this.props.errorClass(this.props.formErrors.email)}`}
          id="email"
          name="email"
          type="text"
          placeholder="Enter Your E-mail Address"
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        <label htmlFor="sellerType">I am a...</label>
        <select 
          className={`form-control-lg form-control ${this.props.errorClass(this.props.formErrors.sellerType)}`}
          aria-label=".form-select-lg example" 
          id="sellerType" 
          name="sellerType"
          value={this.props.sellerType}
          onChange={this.props.handleChange}
        >
          <option value="0">Select...</option
          <option value="1">Seller/Property Owner</option>
          <option value="2">Listing Agent</option>
          <option value="3">Trustee</option>
          <option value="4">Director of a Company</option>
        </select>
        <label htmlFor="occupancy">Occupancy Status</label>
        <select 
          className={`form-control-lg form-control ${this.props.errorClass(this.props.formErrors.occupancy)}`}
          aria-label=".form-select-lg example" 
          id="occupancy" 
          name="occupancy"
          value={this.props.occupancy}
          onChange={this.props.handleChange}
        >
          <option value="0">Select...</option>
          <option value="1">Tenant Occupied</option>
          <option value="2">Vacant</option>
          <option value="3">Owner Occupied</option>
        </select>
      </div></Slide>
    )
  }
}

export default Step1;