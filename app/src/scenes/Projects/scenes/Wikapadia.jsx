import React from 'react';
import WorkInfo from '../../../components/WorkInfo';
import projects from '../constants/projects';

const Chatroom = () => {
  const style = {
    padding: '1%',
    fontSize: '18px',
    textAlign: 'right',
  };
  return (
    <div style={style}>
      <WorkInfo job={projects.Wikapadia} style={{ whiteSpace: 'pre-wrap' }} />
      <a href="http://jessehuang.me:3000/">Website </a>
      <a href="https://github.com/jessejhuang/chatroom">GitHub</a>
    </div>
  );
};

export default Chatroom;
