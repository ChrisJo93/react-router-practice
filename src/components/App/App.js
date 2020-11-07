import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import AboutPage from '../../pages/About';
import HomePage from '../../pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">GitHub Trick or Treater List</h1>
          </header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <br />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
