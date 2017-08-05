import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import WorkInfo from '../../../../components/WorkInfo';
import projects from '../../constants/projects';
import amMap from './images/am-map.png';
import newsfeed from './images/am-newsfeed.png';

const Almanacc = () => {
  const style = {
    padding: '1%',
    fontSize: '18px',
    textAlign: 'right',
  };
  const vImgStyle = {
    height: '350px',
    width: '200px',
    margin: '0 auto',
  };
  return (
    <div style={style}>
      <WorkInfo job={projects.Almanacc} style={{ whiteSpace: 'pre-wrap' }} />
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Paper style={vImgStyle}>
            <img src={amMap} alt="Map" height="100%" width="100%" />
          </Paper>
        </Col>
        <Col xs={12} md={5} lg={5}>
          <Paper style={vImgStyle}>
            <img src={newsfeed} alt="Newsfeed" height="100%" width="100%" />
          </Paper>
        </Col>
      </Row>
      <a href="https://github.com/jguc17/Almanacc" >GitHub</a>
    </div>
  );
};

export default Almanacc;
