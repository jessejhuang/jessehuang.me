import React from 'react';
import WorkInfo from '../../../components/WorkInfo';
import projects from '../constants/projects';

const Calendar = () => {
  const style = {
    padding: '1%',
    fontSize: '18px',
    textAlign: 'right',
  };
  const calStyle = {
    backgroundColor: 'white',
    minHeight: '90vh',
    width: '100%',
    marginTop: '2%',
  };
  return (
    <div style={style}>
      <WorkInfo job={projects.Calendar} style={{ whiteSpace: 'pre-wrap' }} />
      <a href="http://jessehuang.me/calendar">Website </a>
      <a href="https://github.com/jessejhuang/calendar">GitHub</a>
      <iframe style={calStyle} title="project"src="http://jessehuang.me/calendar">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default Calendar;
