import React from "react";
import Slide from 'react-reveal';
class Step2 extends React.Component {render() {
  if (this.props.currentStep !== 2) { // Prop: The current step
    return null
  }
  // The markup for the Step 1 UI
  return(
    <Slide right><div className="form-group">
      <label htmlFor="email">Email address</label>
      <input 
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={this.props.email} // Prop: The email input data
        onChange={this.props.handleChange} // Prop: Puts data into state
      />
    </div></Slide>
  )}
}

export default Step2;