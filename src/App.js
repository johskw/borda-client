import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Top from './components/Top';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Top/>
      </Fragment>
    );
  }
}

export default App;
