import React, { useState, useEffect } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const token = localStorage.getItem('token');

function User(props) {

  const [details, setDetails] = useState([]);

  function axiosWithAuth() {
    const token = localStorage.getItem('token');
  
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: {
        Authorization: token,
      }
    });
  
    return instance;
  }

  useEffect(() => {
      axiosWithAuth().get('http://localhost:3300/api/jokes', { "Authorization": token })
        .then(res => {
          console.log(res);
          setDetails(res.data);
          debugger
        })
        .catch(err => {
          console.log(err)
          debugger
        })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {details.map(user => (
              user.joke
          ))}
        </div>
      </header>
    </div>
  );
}

export default User;
