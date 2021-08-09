import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class FormValidateCedula extends Component {

    state = {
        alert: {
            status: false,
            errorMessage: '',
            type: ''
        }
    }

    regexCedula = /[0-9]\d{2}-[0-9]\d{6}-[0-9]/g;

    continue = () => {
        this.props.nextStep();
    };

    ValidateCedula = (cedula) => {

        if (this.regexCedula.test(cedula.trim()) === false) {
            this.setState({
                alert: {
                    status: true,
                    errorMessage: 'Cédula No Válida',
                    type: 'error'
                }
            })
            return;
        }

        const cedulaSaved = localStorage.getItem(cedula.trim())
        console.log(cedulaSaved);

        if (cedulaSaved !== null) {
            this.setState({
                alert: {
                    status: true,
                    errorMessage: 'Ya has llenado el formulario. Revisa tu correo.',
                    type: 'info'
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

    render() {
        const { values, handleChange } = this.props;

        return (
            <>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <AppBar title="Enter Personal Details" position="static">
                        <Typography variant="h6" style={{ padding: 5, textAlign: 'center' }}>
                            Validar Tu Cédula
                        </Typography>
                    </AppBar>

                    <TextField
                        placeholder="xxx-xxxxxxx-x"
                        label="Cédula"
                        onChange={handleChange('cedula')}
                        defaultValue={values.cedula}
                        margin="normal"
                        fullWidth
                    />

                    <br />
                    {this.state.alert.status && (
                        <Alert severity={this.state.alert.type}>{this.state.alert.errorMessage}</Alert>
                    )}
                    <br />

                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => this.ValidateCedula(values.cedula)}
                    >Continuar</Button>

                </Dialog>
            </>
        )
    }
}
