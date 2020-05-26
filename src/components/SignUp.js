import React, { useState, Component } from 'react';
import UserPool from '../UserPool';
import { Link } from 'react-router-dom';
import '../App.css';

export default () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');



  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        if (err.code == 'InvalidParameterException') {
          setError('Invalid Password set');
        } else if (err.code == 'InvalidPasswordException') {
          var fullMessage = err.message
          var fullMessageSplit = fullMessage.split(': ')
          setError(fullMessageSplit[1]);
        } else {
          setError(err.message);
        }
      } else {
        setError('');
        setSuccess('Check your email for your verification link');
      }
    });
  };

  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <h2>TWS</h2>
        <h3>Create an Account</h3>
        <div className='FormGroup'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' value={email} onChange={event => setEmail(event.target.value)}></input>
        </div>
        <div className='FormGroup'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' value={password} onChange={event => setPassword(event.target.value)}></input>
        </div>
        <button type='submit'>Sign Up</button>
        <err>{error}</err>
        <suc>{success}</suc>
        <Link to='/login'>Login Instead?</Link>
      </form>
    </div>
  );
};
