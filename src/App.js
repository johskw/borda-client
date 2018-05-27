import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Top from './components/Top';
import EventForm from './containers/EventForm';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route path="/events/new" component={EventForm} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
