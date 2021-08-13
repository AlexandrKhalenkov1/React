/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const RegLogMain = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Field email is Empty');
  const [passwordError, setPasswordError] = useState('Password is empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Your email is incorrent');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3) {
      setPasswordError('Your password is to short');
      if (!e.target.value) {
        setPasswordError('Password is empty');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };
  return (
    <div className="registrForm">
      <form>
        <h3>Registration form</h3>
        {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
        <input onChange={(e) => emailHandler(e)} onBlur={(e) => blurHandler(e)} value={email} name="email" type="text" placeholder="Enter your email" />
        {(passwordError && passwordDirty) && <div style={{ color: 'red' }}>{passwordError}</div>}
        <input onChange={(e) => passwordHandler(e)} value={password} onBlur={(e) => blurHandler(e)} name="password" type="password" placeholder="Enter your password" />
        <button disabled={!formValid} type="submit">Registration</button>
      </form>

    </div>
  );
};

export default RegLogMain;
