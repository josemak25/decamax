import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Movielist from './MoviesList';
import MovieDetails from './MovieDetails';

import './App.css';

export default function App() {
  const logo = '< DecaMax >';
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="logo-anchor">
            <div className="App-logo">{logo}</div>
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={Movielist} />
          <Route exact path="/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}
