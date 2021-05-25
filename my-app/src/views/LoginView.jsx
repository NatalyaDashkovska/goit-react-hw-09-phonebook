import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

import { useDispatch } from 'react-redux';
const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = e => {
    setEmail(e.target.value);
  };
  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.login({ email, password }));

      setEmail('');
      setPassword('');
    },
    [email, password, dispatch],
  );
  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginView;
