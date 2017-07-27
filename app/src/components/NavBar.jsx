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
import GrandSlam from '../images/grand_slam.jpg';
import Bio from '../images/bio.jpg';
import Typing from '../images/typing.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundUrl: GrandSlam,
      backgroundDarkness: 0.3,
    };
  }
  render() {
    const gridStyle = {
      paddingLeft: '0rem',
      paddingRight: '0rem',
      backgroundImage: `linear-gradient(
        rgba(0,0,0,${this.state.backgroundDarkness}),
        rgba(0,0,0,${this.state.backgroundDarkness})),
        url(${this.state.backgroundUrl})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    };
    const paperStyle = {
      height: '100vh',
      backgroundColor: 'rgba(48,48,48,0.2)',
    };
    return (
      <div>
        <Router>
          <div>
            <Grid fluid style={gridStyle}>
              <Row>
                <Col xs={3} md={3} lg={2} >
                  <Paper style={paperStyle}>
                    <List>
                      <ListItem
                        primaryText="Home"
                        onTouchTap={() => {
                          this.setState({ backgroundUrl: GrandSlam });
                          this.setState({ backgroundDarkness: 0.3 });
                        }}
                        containerElement={<Link to="/">Home</Link>}
                      />
                      <Divider />
                      <ListItem
                        primaryText="About"
                        onTouchTap={() => {
                          this.setState({ backgroundUrl: Bio });
                          this.setState({ backgroundDarkness: 0.8 });
                        }}
                        containerElement={<Link to="/about">About</Link>}
                      />
                      <Divider />
                      <ListItem
                        primaryText="Projects"
                        onTouchTap={() => {
                          this.setState({ backgroundUrl: Typing });
                          this.setState({ backgroundDarkness: 0.9 });
                        }}
                        containerElement={<Link to="/projects">Projects</Link>}
                      />
                      <Divider />
                    </List>
                  </Paper>
                </Col>
                <Col xs={9} md={9}>
                  <Route exact path="/" component={Home} />
                  <Route
                    path="/about"
                    component={About}
                  />
                  <Route path="/projects" component={Projects} />
                </Col>
              </Row>
            </Grid>
          </div>
        </Router>
      </div>
    );
  }
}
export default NavBar;
