import React, { Component } from 'react';

import NavBar from './nav.component';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar location={this.props.location}/>
        {this.props.children}
      </div>
    );
  }
}
