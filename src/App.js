import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/event" component={Events} />
          <Route exact path="/programming" component={Programming} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/contributors" component={Contributors} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
