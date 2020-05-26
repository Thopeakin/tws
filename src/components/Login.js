import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';

export default () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  var history = useHistory();

  const onSubmit = event => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log('onSuccess:', data);
        history.push('/dash');
      },
      onFailure: err => {
        setError(err.message);
      },
      newPasswordRequired: data => {
        setError(data.message);
      },
      
    })
  };

  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <h2>TWS</h2>
        <h3>Log into your Account</h3>
        <div className='FormGroup'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' value={email} onChange={event => setEmail(event.target.value)}></input>
        </div>
        <div className='FormGroup'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' value={password} onChange={event => setPassword(event.target.value)}></input>
        </div>
        <button type='submit'>Log In</button>
        <err>{error}</err>
        <suc>{success}</suc>
        <Link to='/'>Sign up Instead?</Link>
      </form>
    </div>
  );
};
