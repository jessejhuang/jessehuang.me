import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const Home = () => {
  const style = {
    marginTop: '10%',
    height: 'auto%',
    width: '100%',
  };
  return (
    <Row style={style} center="xs" middle="xs">
      <Col xs={10} md={10} lg={10} >
        <div style={{ fontSize: '72px' }}>
          jesse huang
        </div>
        <div style={{ fontSize: '32px' }}>
          software engineer
        </div>
      </Col>
    </Row>
  );
};

export default Home;
