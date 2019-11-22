import React, { useState, useEffect } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import SignUp from './SignUp';
import Jokes from './Jokes';
import SignIn from './SignIn';

const initialForm = {
  username: '',
  password: '',
};

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' render={() => <Redirect to ='/register'/>} />
        <Route exact path='/register' render={(props) => <SignUp {...props} />} />
        <Route exact path='/login' render={(props) => <SignIn {...props} />} />
        <Route exact path='/jokes' render={() => <Jokes />} />
      </header>
    </div>
  );
}

export default App;
