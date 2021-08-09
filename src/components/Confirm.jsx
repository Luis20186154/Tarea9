import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, cedula, phone, birth, province, bloodType }
    } = this.props;
    return (
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Enter Personal Details" position="static">
            <Typography variant="h6" style={{ padding: 5, textAlign: 'center' }}>
              Confirmación De Datos
            </Typography>
          </AppBar>
          <List>
            <ListItem>
              <ListItemText primary="Cedula" secondary={cedula} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Nombre Completo" secondary={firstName + ' ' + lastName} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Teléfono" secondary={phone} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Fecha De Nacimiento" secondary={birth} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Provincia" secondary={province} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Tipo De Sangre" secondary={bloodType} />
            </ListItem>

          </List>
          <br />

          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Regresar</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Confirmar & Enviar</Button>
        </Dialog>
      </>
    );
  }
}

export default Confirm;
