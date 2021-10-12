import React from "react";

class Step3 extends React.Component {render() {
  if (this.props.currentStep !== 3) { // Prop: The current step
    return null
  }
  // The markup for the Step 1 UI
  return(
    <div className="form-group">
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
            <button className="btn btn-success btn-block">Sign up</button>

    </div>
  )}
}

export default Step3;