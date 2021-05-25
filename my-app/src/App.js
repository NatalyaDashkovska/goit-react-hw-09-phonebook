import React, { Component, Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppBar from './components/AppBar';
import styles from './index.module.css';
import { Switch, Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';

const HomeView = lazy(() =>
  import('./views/HomeView.jsx' /* webpackChunkName: "home-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView.jsx' /* webpackChunkName: "login-view" */),
);
const PhonebookView = lazy(() =>
  import('./views/PhonebookView.jsx' /* webpackChunkName: "phonebook-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <PhonebookView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
