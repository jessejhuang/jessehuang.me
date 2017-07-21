import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from './components/NavBar';


const App = () => (
  <div className="App">
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <NavBar />
    </MuiThemeProvider>
  </div>
);

export default App;
