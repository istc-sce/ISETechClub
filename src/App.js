import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home.js';
import Events from './components/event.js';
import Programming from './components/programming.js';
import Result from './components/result.js';
import Contributors from './components/contributors.js';

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
