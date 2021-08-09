import React, { Component } from 'react';
import FormValidateCedula from './FormValidateCedula.jsx';
import FormUserDetails from './FormUserDetails.jsx';
import FormUserLocation from './FormUserLocation.jsx';
import FormUserContact from './FormUserContact.jsx';
import Confirm from './Confirm.jsx';
import Success from './Success.jsx';

export class UserForm extends Component {
  state = {
    step: 1,
    cedula: '',
    firstName: '',
    lastName: '',
    birth: new Date(),
    bloodType: '',
    email: '',
    justification: '',
    phone: '',
    direction: '',
    latitude: '',
    longitude: '',
    province: '',
    previousCovid: false,
  };

  setDate = (value) => {
    this.setState({ birth:  value.toLocaleDateString()});
  }

  setPreviousCovid = (value) => {
    this.setState({ previousCovid:  value});
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { cedula, firstName, lastName, birth, bloodType, email, justification, phone, direction, latitude, longitude, province, previousCovid } = this.state;
    const values = { cedula, firstName, lastName, birth, bloodType, email, justification, phone, direction, latitude, longitude, province, previousCovid };

    switch (step) {
      case 1:
        return(
          <FormValidateCedula
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )        
      case 2:
        return (
          <FormUserDetails
            setPreviousCovid = {this.setPreviousCovid}
            setDate = {this.setDate}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormUserLocation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 4:
        return (
          <FormUserContact
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 6:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
