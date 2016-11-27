import React, { Component } from 'react';

class PicModal extends Component {
  render() {
    const { pic } = this.props;
    return (
      <div className="ui small modal transition visible active">
        <div className="header">
          <i className="remove icon" />
        </div>
        <div className="content">
          <img className="ui image large rounded" src={pic.url} />
        </div>
      </div>
    );
  }
}
