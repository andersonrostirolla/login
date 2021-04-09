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
  ForgetPassword
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
          <Route path="/logged">
            <Logged/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
