import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from '../scenes/Home';
import About from '../scenes/About';
import Projects from '../scenes/Projects';

const NavBar = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>

      <hr />

      <Route exact path="/" name="foobar" component={() => (<Home name="jesse huang" />)} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>
);
export default NavBar;
