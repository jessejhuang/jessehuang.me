import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import backgrounds from './constants/backgrounds';

const App = () => (
  <div className="App">
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Router>
        <NavBar backgrounds={backgrounds} />
      </Router>
    </MuiThemeProvider>
  </div>
);


export default App;
