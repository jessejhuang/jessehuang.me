import React from 'react';
import PropTypes from 'prop-types';

const style = {
  margin: '0.5em',
  paddingLeft: '40px',
  listStyle: 'none',
  // color: 'blue',
};

const Projects = () => {
  const pa = 'fo';
  return (
    <div>
      <div style={style}> {pa} </div>
      <div> software engineer </div>
      <iframe title={pa} src="http://jessehuang.me/calendar" width="400" height="300">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};
Projects.propTypes = {
  name: PropTypes.string,
};
Projects.defaultProps = {
  name: 'Default name',
};


export default Projects;
