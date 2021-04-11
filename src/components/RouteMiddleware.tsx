import React from 'react';
import { Route } from 'react-router-dom';
import PageUnauthorized from './PageUnauthorized';
import { getSessionStorage } from '../utils'

const RouteMiddleware: React.FC<any> = ({
  children,
  ...props
}) => {
  let logged = false;
  try {
    const sessionRemember = getSessionStorage('remember');
    const sessionLogin = getSessionStorage('login');
    logged = sessionRemember === 'true' || sessionLogin === 'true';
  } catch {
    logged = false;
  }

  if (!logged) {
    return <PageUnauthorized />;
  } 

  return (
    <Route {...props}>
      {children}
    </Route>
  )
}

export default RouteMiddleware;
