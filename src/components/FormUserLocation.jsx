import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class FormPersonalDetails extends Component {

  state = {
    alert: {
      status: false,
      errorMessage: '',
      type: ''
    },
  }

  continue = () => {
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    const validation = () => {

      if (values.direction.trim() === '' || values.latitude.trim() === 0 || values.longitude.trim() === 0 || values.province.trim() === '') {
        this.setState({
          alert: {
            status: true,
            errorMessage: 'Por favor llenar todos los campos',
            type: 'error'
          }
        })
        return;
      }


      this.setState({
        alert: {
          status: false
        },
      })

      this.continue();

    }

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" position="static">
              <Typography variant="h6" style={{ padding: 5, textAlign: 'center' }}>
                Información De Ubicación
              </Typography>
            </AppBar>
            <TextField
              placeholder=""
              label="Dirección"
              onChange={handleChange('direction')}
              defaultValue={values.direction}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              type="number"
              placeholder=""
              label="Latitud"
              onChange={handleChange('latitude')}
              defaultValue={values.latitude}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              type="number"
              placeholder=""
              label="Longitud"
              onChange={handleChange('longitude')}
              defaultValue={values.longitude}
              margin="normal"
              fullWidth
            />
            <br />

            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Provincia
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={values.province}
              onChange={handleChange('province')}
            >
              <MenuItem value={'santoDomingo'}>Santo Domingo</MenuItem>
              <MenuItem value={'laRomana'}>La Romana</MenuItem>
              <MenuItem value={'barahona'}>Barahona</MenuItem>
              <MenuItem value={'ocoa'}>San José de Ocoa</MenuItem>
              <MenuItem value={'dajabon'}>Dajabón</MenuItem>
              <MenuItem value={'santiagoRodriguez'}>Santiago Rodirguez</MenuItem>
              <MenuItem value={'laVega'}>La Vega</MenuItem>
              <MenuItem value={'pedroMacoriz'}>San Pedro De Macoriz</MenuItem>
            </Select>
            <br />
            {this.state.alert.status && (
              <Alert severity={this.state.alert.type}>{this.state.alert.errorMessage}</Alert>
            )}
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Regresar</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={validation}
            >Continuar</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
