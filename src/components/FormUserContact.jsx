import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class FormUserContact extends Component {

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

            if (values.email.trim() === '' || values.phone.trim() === '' || values.justification.trim() === '') {
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
                                Información De Contacto
                            </Typography>
                        </AppBar>
                        <TextField
                            placeholder=""
                            label="Correo Electrónico"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder=""
                            label="Número De Teléfono"
                            onChange={handleChange('phone')}
                            defaultValue={values.phone}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder=""
                            label="Justifique porque deben vacunarlo en su casa"
                            onChange={handleChange('justification')}
                            defaultValue={values.justification}
                            margin="normal"
                            fullWidth
                        />
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

export default FormUserContact;
