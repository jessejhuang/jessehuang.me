import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Home from '../scenes/Home';
import About from '../scenes/About';
import Projects from '../scenes/Projects/Projects';
import Contact from '../scenes/Contact';
import Experience from '../scenes/Experience';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    const bgs = this.props.backgrounds;
    let initBg;
    switch (this.props.location.pathname) {
      case '/about':
        initBg = bgs.about;
        break;
      case '/projects':
        initBg = bgs.projects;
        break;
      case '/contact':
        initBg = bgs.contact;
        break;
      case '/experience':
        initBg = bgs.experience;
        break;
      default:
        initBg = bgs.home;
    }
    this.state = {
      background: {
        url: initBg.url,
        darkness: initBg.darkness,
      },
    };
  }
  render() {
    const bgs = this.props.backgrounds;
    const gridStyle = {
      paddingLeft: '0rem',
      paddingRight: '0rem',
      width: '100%',
      backgroundImage: `linear-gradient(
        rgba(0,0,0,${this.state.background.darkness}),
        rgba(0,0,0,${this.state.background.darkness})),
        url(${this.state.background.url})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: 'auto',
      minHeight: '100vh',
      color: '#CCCCCC',
    };
    const paperStyle = {
      height: '100%',
      minHeight: '100vh',
      backgroundColor: 'rgba(48,48,48,0.5)',
    };
    return (
      <div>
        <Grid fluid style={gridStyle}>
          <Row>
            <Col xs={3} md={3} lg={2} >
              <Paper style={paperStyle}>
                <List>
                  <ListItem
                    primaryText="Home"
                    onTouchTap={() => {
                      this.setState({ background: bgs.home });
                    }}
                    containerElement={<Link to="/" />}
                  />
                  <Divider />
                  <ListItem
                    primaryText="About"
                    onTouchTap={() => {
                      this.setState({ background: bgs.about });
                    }}
                    containerElement={<Link to="/about" />}
                  />
                  <Divider />
                  <ListItem
                    primaryText="Experience"
                    onTouchTap={() => {
                      this.setState({ background: bgs.experience });
                    }}
                    containerElement={<Link to="/experience" />}
                  />
                  <Divider />
                  <ListItem
                    primaryText="Projects"
                    onTouchTap={() => {
                      this.setState({ background: bgs.projects });
                    }}
                    containerElement={<Link to="/projects" />}
                  />
                  <Divider />
                  <ListItem
                    primaryText="Contact"
                    onTouchTap={() => {
                      this.setState({ background: bgs.contact });
                    }}
                    containerElement={<Link to="/contact" />}
                  />
                </List>
              </Paper>
            </Col>
            <Col style={{ minHeight: '100vh', height: '100%' }} xs={9} md={9} lg={10}>
              <Route exact path="/" component={Home} />
              <Route
                path="/about"
                component={About}
              />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/experience" component={Experience} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  backgrounds: PropTypes.shape({
    home: PropTypes.shape({
      url: PropTypes.string,
      darkness: PropTypes.number,
    }),
    projects: PropTypes.shape({
      url: PropTypes.string,
      darkness: PropTypes.number,
    }),
    contact: PropTypes.shape({
      url: PropTypes.string,
      darkness: PropTypes.number,
    }),
    about: PropTypes.shape({
      url: PropTypes.string,
      darkness: PropTypes.number,
    }),
    experience: PropTypes.shape({
      url: PropTypes.string,
      darkness: PropTypes.number,
    }),
  }).isRequired,
};
export default withRouter(NavBar);
