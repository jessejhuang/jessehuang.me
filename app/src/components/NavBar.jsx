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
import Contact from '../scenes/Contact';
import GrandSlam from '../images/grand_slam.jpg';
import Bio from '../images/bio.jpg';
// import WaterTree from '../images/jiuzhaigoutree.jpg';
import Lake from '../images/jiuzhaigoulake.jpg';
import Roof from '../images/jiuzhaigouroof.jpg';

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
                        containerElement={<Link to="/" />}
                      />
                      <Divider />
                      <ListItem
                        primaryText="About"
                        onTouchTap={() => {
                          this.setState({ backgroundUrl: Roof });
                          this.setState({ backgroundDarkness: 0 });
                        }}
                        containerElement={<Link to="/about" />}
                      />
                      <Divider />
                      <ListItem
                        primaryText="Projects"
                        onTouchTap={() => {
                          this.setState({ backgroundUrl: Lake });
                          this.setState({ backgroundDarkness: 0 });
                        }}
                        containerElement={<Link to="/projects" />}
                      />
                      <Divider />
                      <ListItem
                        primaryText="Contact"
                        onTouchTap={() => {
                          this.setState({ backgroundUrl: Bio });
                          this.setState({ backgroundDarkness: 0.6 });
                        }}
                        containerElement={<Link to="/contact" />}
                      />
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
                  <Route path="/contact" component={Contact} />
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
