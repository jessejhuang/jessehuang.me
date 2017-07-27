import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';

const Contact = () => {
  const style = {
    color: 'floralwhite',
    textAlign: 'center',
    height: '100%',
    width: '100%',
  };
  const linkStyle = {
    fontSize: '32px',
    textAlign: 'center',
    height: '60%',
  };
  return (
    <Row style={style}>
      <Col xs={12} md={12} lg={12} >
        <div style={{ fontSize: '64px' }}>
          Contact
        </div>
        <Divider />
        <Row middle="xs" style={linkStyle}>
          <Col xs={12} md={12} lg={12} >
            Email me at <a href="mailto:jessehuang@wustl.edu">jessehuang@wustl.edu</a>
            <br />
            View my profile on <a href="https://www.linkedin.com/pub/jesse-huang/101/911/5b2">LinkedIn</a>
            <br />
            Check out my <a href="https://github.com/jessejhuang">GitHub</a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Contact;
