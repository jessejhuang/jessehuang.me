import React from 'react';
import WorkInfo from '../../../components/WorkInfo';
import projects from '../constants/projects';

const RaPlus = () => {
  const style = {
    padding: '1%',
    fontSize: '18px',
    textAlign: 'right',
  };
  const frameStyle = {
    backgroundColor: 'white',
    minHeight: '90vh',
    width: '100%',
    marginTop: '2%',
  };
  return (
    <div style={style}>
      <WorkInfo job={projects.raPlus} style={{ whiteSpace: 'pre-wrap' }} />
      <a href="http://jessehuang.me:5000/">Website </a>
      <a href="https://github.com/jessejhuang/raPlus">GitHub</a>
      <iframe style={frameStyle} title="project" src="http://jessehuang.me:5000">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default RaPlus;
