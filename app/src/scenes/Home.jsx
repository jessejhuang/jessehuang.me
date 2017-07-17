import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ name }) => {
  const pa = `${name}pa`;
  return (
    <div>
      <div> {pa}Projects </div>
      <div> software engineer </div>
    </div>
  );
};
Home.propTypes = {
  name: PropTypes.string,
};
Home.defaultProps = {
  name: 'Default name',
};


export default Home;
