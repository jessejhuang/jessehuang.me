import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Almanacc from './Almanacc';
import Movie from './Movie';
import Drawing from './Drawing';
import Pet from './Pet';

const Swift = () => {
  const subhead = {
    marginTop: '1rem',
    fontSize: '40px',
    textAlign: 'center',
  };
  return (
    <Row middle="xs">
      <Col xs={12} md={12} lg={12} style={subhead} >
        <Paper style={{ paddingTop: '2%', color: '#CCCCCC', backgroundColor: 'rgb(60,60,60)' }}>
          iPhone Apps
          <List>
            <Almanacc />
            <Movie />
            <Drawing />
            <Pet />
          </List>
        </Paper>
      </Col>
    </Row>
  );
};
export default Swift;
