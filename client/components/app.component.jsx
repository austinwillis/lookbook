import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import PictureList from './picturelist.component';
import About from './about.component';
import Container from './container.component';
import Contact from './contact.component';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory} >
          <Route path='/' component={Container}>
            <IndexRoute component={PictureList} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Route>
        </Router>
      </div>
    )
  }
}
