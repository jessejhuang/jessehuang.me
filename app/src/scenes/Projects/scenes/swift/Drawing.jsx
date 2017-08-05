import React from 'react';
import Paper from 'material-ui/Paper';
import WorkInfo from '../../../../components/WorkInfo';
import projects from '../../constants/projects';
import cow from './images/cow.png';

const Drawing = () => {
  const style = {
    padding: '1%',
    fontSize: '18px',
    textAlign: 'right',
  };
  const hImgStyle = {
    height: '200px',
    width: '340px',
    margin: '1% auto',
  };
  return (
    <div style={style}>
      <WorkInfo job={projects.Draw} style={{ whiteSpace: 'pre-wrap' }} />
      <Paper style={hImgStyle}>
        <img src={cow} alt="Mac Pet" height="100%" width="100%" />
      </Paper>
      <a href="https://github.com/jessejhuang/Drawing-app" >GitHub</a>
    </div>
  );
};

export default Drawing;
