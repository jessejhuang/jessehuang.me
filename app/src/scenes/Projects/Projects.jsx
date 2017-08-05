import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Row, Col } from 'react-flexbox-grid';
import Calendar from './scenes/Calendar';
import Chatroom from './scenes/Chatroom';
import Wikapadia from './scenes/Wikapadia';
import RaPlus from './scenes/RaPlus';
import SmartFan from './scenes/SmartFan';
import Swift from './scenes/swift/Swift';

const style = {
  margin: '0.5em 0',
  padding: '0 5px',
  listStyle: 'none',
  textAlign: 'center',
  color: '#444444',
  width: '100%',
  height: '100%',
};

const Projects = () => {
  const paperStyle = {
    fontSize: '64px',
    paddingTop: '2%',
  };
  const tabStyle = {
    padding: '1% 2%',
  };
  const buttonStyle = {
    textTransform: 'initial',
    width: '100%',
    height: '100%',
  };
  const tabHead = {
    color: '#000000',
    backgroundColor: '#AAAAAA',
  };
  return (
    <Row middle="xs" style={style}>
      <Col xs={12} md={12} lg={12} >
        <Paper style={paperStyle}>
          Projects
          <Divider />
          <Tabs style={tabStyle} inkBarStyle={{ backgroundColor: 'black' }} tabItemContainerStyle={tabHead}>
            <Tab label="RAplus" style={buttonStyle}>
              <RaPlus />
            </Tab>
            <Tab label="Calendar" style={buttonStyle}>
              <Calendar />
            </Tab>
            <Tab label="BLE SmartFan" style={buttonStyle}>
              <SmartFan />
            </Tab>
            <Tab label="Chatroom" style={buttonStyle}>
              <Chatroom />
            </Tab>
            <Tab label="Wikapadia" style={buttonStyle}>
              <Wikapadia />
            </Tab>
            <Tab label="iPhone Apps" style={buttonStyle}>
              <Swift />
            </Tab>
          </Tabs>
        </Paper>
        <br />
      </Col>
    </Row>
  );
};

export default Projects;
