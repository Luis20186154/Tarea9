import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import axios from 'axios';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  data = {
    service_id: 'service_p2uyh61',
    template_id: 'template_38sz2mm',
    user_id: 'user_5IijTCq2lStgxbQvLlg36',
    template_params: {
      'to_name': this.props.firstName,
      'to_email': this.props.values.email
    }
  };

  sendEmail = async () => {

    localStorage.setItem(this.props.values.cedula.trim(), this.props.values.email.trim())

    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', this.data)
    } catch (error) {
      console.log('ERROR TO SEND EMAIL: ', error)
    }
  }

  componentDidMount() {
    this.sendEmail()
  }

  render() {
    return (
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Success" position='static' style={{ padding: 15, borderRadius: 10 }}>
            <h2>Gracias Por Haber Completado El Registro</h2>
            <br />
            <p>Estaremos enviandote un email de cofirmación.</p>
          </AppBar>
        </Dialog>
      </>
    );
  }
}

export default Success;
