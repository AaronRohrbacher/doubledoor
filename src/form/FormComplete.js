import React from 'react';

class FormComplete extends React.Component {
  render() {
    if (!this.props.complete || this.props.currentStep == 0) {
      return null;
    }
    return (
      <div>
        Your registration details: <br />
        Email: {this.props.email} <br />
        sellerType: {this.props.sellerType} <br />
        occupancy: {this.props.occupancy} <br />
        escrow: {this.props.escrow} <br />
        escrowOfficer: {this.props.escrowOfficer} <br />
        escrowPhone: {this.props.escrowPhone} <br />
        escrowEmail: {this.props.escrowEmail} <br />
        title: {this.props.title} <br />
        titleOfficer: {this.props.titleOfficer} <br />
        titlePhone: {this.props.titlePhone} <br />
        titleEmail: {this.props.titleEmail}
      </div >
    )
  }
}

export default FormComplete;