import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import {
  WrapperContent,
  Logged
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
          <Route path="/logged">
            <Logged/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
