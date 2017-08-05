import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import WorkInfo from '../../../../components/WorkInfo';
import projects from '../../constants/projects';
import pet from './images/pet.png';
import macPet from './images/mac-pet.png';

const Pet = () => {
  const style = {
    padding: '1%',
    fontSize: '18px',
    textAlign: 'right',
  };
  const vImgStyle = {
    height: '200px',
    width: '140px',
    margin: '0 auto',
  };
  const hImgStyle = {
    height: '175px',
    width: '233px',
    margin: '1% auto',
  };
  return (
    <div style={style}>
      <WorkInfo job={projects.Pet} style={{ whiteSpace: 'pre-wrap' }} />
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Paper style={vImgStyle}>
            <img src={pet} alt="Pet" height="100%" width="100%" />
          </Paper>
        </Col>
        <Col xs={12} md={5} lg={5}>
          <Paper style={hImgStyle}>
            <img src={macPet} alt="Mac Pet" height="100%" width="100%" />
          </Paper>
        </Col>
      </Row>
      <a href="https://github.com/jessejhuang/VirtualPet" >GitHub</a>
    </div>
  );
};

export default Pet;
