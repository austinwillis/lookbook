import React, { Component } from 'react';

import { Link } from 'react-router';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navContainer" className="ui large secondary network stackable menu">
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
        <div className="right stackable pointing menu">
          <Link className={this.props.location.pathname === "/" ? "active item" : "item"} to={'/'}>
            Home
          </Link>
          <Link className={this.props.location.pathname === "/about" ? "active item" : "item"} to={'/about'}>
            About
          </Link>
          <Link className={this.props.location.pathname === "/contact" ? "active item" : "item"} to={'/contact'}>
            Contact
          </Link>
        </div>
      </div>
    )
  }
}
