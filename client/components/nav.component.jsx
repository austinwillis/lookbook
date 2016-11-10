import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div id="navContainer" className="ui large secondary network menu">
        <div className="item">
          <div className="ui logo shape">
            <div className="sides">
              <div className="active ui side">
                <img id="mainLogo" className="ui image" src="logo.png" />
              </div>
            </div>
          </div>
        </div>
        <a className="view-ui item">
          <i className="sidebar icon"></i>
        </a>
        <div className="right menu">
          <a className="active item">
            Home
          </a>
          <a className="item">
            About
          </a>
          <a className="item">
            Contact
          </a>
        </div>
      </div>
    )
  }
}
