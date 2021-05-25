import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) => {
  const getUserIn = useSelector(authSelectors.getUserIn);
  return (
    <Route {...routeProps}>
      {getUserIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;