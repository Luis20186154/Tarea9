import React from 'react';
import './App.css';
import { SnackbarProvider } from 'notistack';
import { UserForm } from './components/UserForm';

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <UserForm />
      </SnackbarProvider>
    </div>
  );
}

export default App;
