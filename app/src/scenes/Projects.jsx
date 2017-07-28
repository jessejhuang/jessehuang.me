import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Row, Col } from 'react-flexbox-grid';

const style = {
  margin: '0.5em 0',
  padding: '0 5px',
  listStyle: 'none',
  textAlign: 'center',
  color: '#444444',
  width: '100%',
  height: '100%',
};

const Projects = () => {
  const paperStyle = {
    fontSize: '64px',
  };
  return (
    <Row middle="xs" style={style}>
      <Col xs={12} md={12} lg={12} >
        <Paper style={paperStyle}>
          Projects
          <Divider />
          <br /><br />
        </Paper>
        <br />
        <Row middle="xs" >
          <Col xs={12} md={12} lg={12}>
            <Row middle="xs">
              <iframe title="project"src="http://jessehuang.me/calendar" width="400" height="300">
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
Projects.propTypes = {
  name: PropTypes.string,
};
Projects.defaultProps = {
  name: 'Default name',
};

export default Projects;
