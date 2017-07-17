import React from 'react';
import PropTypes from 'prop-types';

const About = ({ name }) => {
  const pa = `${name}pa`;
  return (
    <div>
      {pa}
      <div id="description" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        Hi there!
        My name is Jesse Huang and I am a junior at Washington University in St Louis.
        Among other things, I am a programmer, a resident advisor, and an occasional poet.
        At Washington University, I have learned from professors and peers alike.
        I value the stories of people around me just as much as I do the
        web frameworks and algorithms I learn.
        I want my work to matter to people. This mantra drives everything I do,
        from coding to performing slam poetry to simply listening to a new perspective.
      </div>
      <div>
        -Also do tech summary on this page
      </div>
    </div>
  );
};
About.propTypes = {
  name: PropTypes.string,
};
About.defaultProps = {
  name: 'Default about name',
};


export default About;
