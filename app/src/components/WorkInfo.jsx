import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';

const WorkInfo = (props) => {
  const style = {
    textAlign: 'left',
    padding: '1.5% 3%',
    lineHeight: '1.8',
    color: '#CCCCCC',
    whiteSpace: 'pre-line',
  };
  const head = {
    fontSize: '22px',
  };
  const subhead = {
    fontSize: '18px',
  };
  const body = {
    fontSize: '16px',
    padding: '0 3%',
  };
  const job = props.job;
  return (
    <ListItem disabled style={style}>
      <div style={head}> {job.title} </div>
      <div style={subhead}> {job.company} </div>
      <div style={subhead}> {job.date} </div>
      <div style={body}> {job.description}</div>
    </ListItem>
  );
};
WorkInfo.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default WorkInfo;
