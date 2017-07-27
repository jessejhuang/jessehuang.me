import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import { langs, frameworks, databases, deployment } from '../constants/skills';

const Experience = () => {
  const style = {
    color: 'floralwhite',
    textAlign: 'center',
    height: '100%',
    width: '100%',
  };
  const bodyStyle = {
    fontSize: '24px',
    textAlign: 'center',
    width: '100%',
    height: '80%',
    marginTop: '2rem',
  };
  const subhead = {
    color: 'floralwhite',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: '3rem',
    fontSize: '40px',
    textAlign: 'center',
  };
  const listStyle = {
    textAlign: 'left',
    paddingLeft: '5rem',
    fontSize: '20px',
  };
  const list3 = {
    textAlign: 'left',
    paddingLeft: '9rem',
    fontSize: '20px',
  };
  return (
    <Row style={style}>
      <Col xs={12} md={12} lg={12} >
        <div style={{ fontSize: '64px' }}>
          Experience
        </div>
        <Divider />
        <Row middle="xs" >
          <Col xs={12} md={12} lg={12} style={subhead} >
            Technology Summary
            <Row style={bodyStyle}>
              <Col xs={12} md={4} lg={4}>
                Programming Languages
                <ul style={listStyle}>
                  {langs.map(str => <li>{str}</li>)}
                </ul>
              </Col>
              <Col xs={12} md={4} lg={4}>
                Web Frameworks/Libraries
                <ul style={listStyle}>
                  {frameworks.map(str => <li>{str}</li>)}
                </ul>
              </Col>
              <Col xs={12} md={4} lg={4}>
                Server Deployment
                <ul style={list3}>
                  {deployment.map(str => <li>{str}</li>)}
                </ul>
                Databases
                <ul style={list3}>
                  {databases.map(str => <li>{str}</li>)}
                </ul>
              </Col>
            </Row>
            <Row middle="xs">
              <Col xs={12} md={12} lg={12} style={subhead} >
                Professional Experience
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Experience;
