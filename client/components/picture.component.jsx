import React, { Component } from 'react';

export default class Picture extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="ui image large rounded" src={this.props.imageUrl} />
      </div>
    );
  }
}
