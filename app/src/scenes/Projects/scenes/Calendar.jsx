import React from 'react';
import WorkInfo from '../../../components/WorkInfo';
import projects from '../constants/projects';

const Calendar = () => {
  const style = {
    padding: '1%',
    fontSize: '18px',
    textAlign: 'right',
  };

  return (
    <div style={style}>
      <WorkInfo job={projects.Calendar} style={{ whiteSpace: 'pre-wrap' }} />
      <a href="https://github.com/jessejhuang/calendar">GitHub</a>
    </div>
  );
};

export default Calendar;
