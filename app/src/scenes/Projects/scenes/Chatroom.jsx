import React from 'react';
import WorkInfo from '../../../components/WorkInfo';
import projects from '../constants/projects';

const Chatroom = () => {
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
      <WorkInfo job={projects.Chatroom} style={{ whiteSpace: 'pre-wrap' }} />
      <a href="http://jessehuang.me:3456/chatroom.html">Website </a>
      <a href="https://github.com/jessejhuang/chatroom">GitHub</a>
      <iframe style={frameStyle} title="project" src="http://jessehuang.me:3456/chatroom.html">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default Chatroom;
