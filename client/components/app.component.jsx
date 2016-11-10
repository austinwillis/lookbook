import React, { Component } from 'react';

import NavBar from './nav.component';
import PictureList from './picturelist.component';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PictureList />
      </div>
    )
  }
}
