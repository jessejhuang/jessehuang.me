import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const Contact = () => {
  const style = {
    color: 'white',
    textAlign: 'center',
    height: '100%',
    width: '100%',
  };
  return (
    <Row style={style}>
      <Col xs={10} md={10} lg={10} >
        <div style={{ fontSize: '64px' }}>
          Contact
        </div>
        <div style={{ fontSize: '32px' }}>
          software engineer
        </div>
      </Col>
    </Row>
  );
};
export default Contact;
