import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import GreatWall from '../images/great_wall.jpg';

const About = () => {
  const style = {
    color: '#CCCCCC',
    textAlign: 'center',
    height: '100%',
    width: '100%',
  };
  const bodyStyle = {
    fontSize: '24px',
    textAlign: 'left',
    width: '100%',
    marginTop: '2rem',
  };
  const imgStyle = {
    height: '200px',
    width: '150px',
    float: 'right',
  };
  return (
    <Row style={style}>
      <Col xs={12} md={12} lg={12} >
        <div style={{ fontSize: '64px' }}>
          About
        </div>
        <Divider />
        <Row style={bodyStyle}>

          <Col xs={12} md={9} lg={10} >
            Hi there!
            <br /><br />
            My name is Jesse Huang and I am a senior at Washington University in St Louis.
            Among other things, I am a programmer, a resident advisor, and an occasional poet.
            <br /><br />
            I want my work to matter.
            <br /><br />
          </Col>
          <Col xs={12} md={3} lg={2}>
            <Paper style={imgStyle} >
              <img src={GreatWall} alt="Bio" height="100%" width="100%" />
            </Paper>
          </Col>
        </Row>
        <Row style={bodyStyle} >
          <Col xs={12} md={12} lg={12} >
            During my time at WashU, I have a become proficient software engineer,
            picking up various technologies along the way. I build things, and I do it well.
            I&#39;m very grateful for this experience, and I need to use it
            to better the lives of other people.
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default About;
