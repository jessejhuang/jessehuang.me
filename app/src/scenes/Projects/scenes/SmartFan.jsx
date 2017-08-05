import React from 'react';
import WorkInfo from '../../../components/WorkInfo';
import projects from '../constants/projects';

const SmartFan = () => {
  const style = {
    padding: '1%',
    fontSize: '18px',
    textAlign: 'right',
  };
  return (
    <div style={style}>
      <WorkInfo job={projects.SmartFan} style={{ whiteSpace: 'pre-wrap' }} />
      <a href="https://github.com/jessejhuang/SmartFan">GitHub</a>
    </div>
  );
};

export default SmartFan;
