import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import {
  WrapperContent,
  Logged,
  Register,
  ForgetPassword,
  RouteMiddleware,
  Page404
} from './components';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Redirect
            exact
            from="/"
            to="/login"
          />
          <Route path="/login">
            <div className="App">
              <WrapperContent/>
            </div>
          </Route>
          <Route path="/forgetpass">
            <ForgetPassword/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <RouteMiddleware path="/logged">
            <Logged/>
          </RouteMiddleware>
          <Route component={Page404} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
