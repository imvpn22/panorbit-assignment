import React from 'react';
import './App.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:userId" component={User} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
