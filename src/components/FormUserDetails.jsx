import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class FormUserDetails extends Component {

  state = {
    alert: {
      status: false,
      errorMessage: '',
      type: ''
    },
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = () => {
    this.props.nextStep();
  };


  render() {
    const { setPreviousCovid, setDate, values, handleChange } = this.props;

    const validation = () => {

      if (values.firstName.trim() === '' || values.lastName.trim() === '' || values.bloodType.trim() === '') {
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
      <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" position="static">
              <Typography variant="h6" style={{ padding: 5, textAlign: 'center' }}>
                Información Personal
              </Typography>
            </AppBar>
            <TextField
              placeholder=""
              label="Nombres"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder=""
              label="Apellidos"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Fecha De Nacimiento"
              format="MM/dd/yyyy"
              value={values.birth}
              onChange={(e) => setDate(e)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <br />
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Tipo de Sangre
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={values.bloodType}
              onChange={handleChange('bloodType')}
            >
              <MenuItem value={'O+'}>O positivo</MenuItem>
              <MenuItem value={'O-'}>O negativo</MenuItem>
              <MenuItem value={'A+'}>A positivo</MenuItem>
              <MenuItem value={'A-'}>A negativo</MenuItem>
              <MenuItem value={'B+'}>B positivo</MenuItem>
              <MenuItem value={'B-'}>B negativo</MenuItem>
              <MenuItem value={'AB+'}>AB positivo</MenuItem>
              <MenuItem value={'AB-'}>AB negativo</MenuItem>
            </Select>

            <br />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    id='checkedA'
                    checked={values.previousCovid ? true : false}
                    onChange={() => setPreviousCovid(true)}
                    name="checkedA"
                    color="primary"
                  />
                }
                label="Sí"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    id='checkedB'
                    checked={values.previousCovid ? false : true}
                    onChange={() => setPreviousCovid(false)}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="No"
              />
            </FormGroup>

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
        </MuiPickersUtilsProvider>
      </>
    );
  }
}

export default FormUserDetails;
