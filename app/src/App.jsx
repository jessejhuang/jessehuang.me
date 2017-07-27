import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Router>
            <NavBar />
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default App;
