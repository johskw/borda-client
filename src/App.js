import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Top from './components/Top';
import EventForm from './containers/EventForm';
import Event from './containers/Event';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
          <Switch>
            <Route exact path="/" component={Top} />
            <Route path="/events/new" component={EventForm} />
            <Route path="/events" component={Event} />
          </Switch>
      </Fragment>
    );
  }
}

export default App;
