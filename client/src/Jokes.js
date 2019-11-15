import React, { useState, useEffect } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function User(props) {

  const [details, setDetails] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3300/api/jokes')
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
              user.username
          ))}
        </div>
      </header>
    </div>
  );
}

export default User;
