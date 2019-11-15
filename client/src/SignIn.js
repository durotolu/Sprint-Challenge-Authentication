import React, { useState, useEffect } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const initialForm = {
  username: '',
  password: '',
};

function SignUp(props) {
  const [signInForm, setSignInForm] = useState(initialForm);

  const isDisabled = () => {
    return !signInForm.username || !signInForm.password;
  }

  const onFormInput = e => {
    setSignInForm({...signInForm, [e.target.id]: e.target.value});
  }

  const addUser = e => {
    e.preventDefault();
    const signInInfo = {
      username: signInForm.username,
      password: signInForm.password,
    }
    axios.post('http://localhost:3300/api/auth/login', signInInfo)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token)
        props.history.push('/user')
      })
      .catch(err => {
        alert(err.message)
      })
    setSignInForm(initialForm);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input onChange={onFormInput} maxLength={50} value={signInForm.username} id='username' type='text' />

          <label htmlFor="password">Password</label>
          <input onChange={onFormInput} value={signInForm.password} id='password' type='password' />

          <button disabled={isDisabled()}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default SignUp;
