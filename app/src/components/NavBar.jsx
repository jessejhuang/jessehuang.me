import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Home from '../scenes/Home';
import About from '../scenes/About';
import Projects from '../scenes/Projects';

const NavBar = () => {
  const gridStyle = {
    paddingLeft: '0rem',
  };
  const paperStyle = {
    height: '100vh',
  };
  return (
    <div>
      <Router>
        <div>
          <Grid fluid style={gridStyle}>
            <Row>
              <Col xs={2} md={2} lg={2} >
                <Paper style={paperStyle}>
                  <List>
                    <ListItem
                      primaryText="Home"
                      containerElement={<Link to="/">Home</Link>}
                    />
                    <Divider />
                    <ListItem
                      primaryText="About"
                      containerElement={<Link to="/about">About</Link>}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Projects"
                      containerElement={<Link to="/projects">Projects</Link>}
                    />
                    <Divider />
                  </List>
                </Paper>
              </Col>
              <Col xs={6} md={3}>
                <Route
                  exact
                  path="/"
                  name="foobar"
                  component={() => (<Home name="jesse huang" />)}
                />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    </div>
  );
};
export default NavBar;
