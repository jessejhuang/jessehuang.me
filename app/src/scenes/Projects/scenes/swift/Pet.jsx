import React from 'react';
import WorkInfo from '../../../components/WorkInfo';
import projects from '../constants/projects';

const Pet = () => {
  const style = {
    padding: '1%',
    fontSize: '18px',
    textAlign: 'right',
  };
  return (
    <div style={style}>
      <WorkInfo job={projects.Movie} style={{ whiteSpace: 'pre-wrap' }} />
      <a href="https://github.com/jessejhuang/VirtualPet" >GitHub</a>
    </div>
  );
};

export default Pet;
