import React, { Component } from 'react';
import { Favorites } from '../../imports/api/favorites.js';
import { Meteor } from 'meteor/meteor';

export default class Picture extends Component {
  constructor(props) {
    super(props);
  }

  toggleSaved() {
    let id = this.props.favorite == undefined ? undefined : this.props.favorite;
    if (id != undefined) {
      Meteor.call('favorites.remove', id);
    } else {
      Meteor.call('favorites.insert', this.props.image._id._str);
    }
  }

  render() {
    return (
      <div className="picture-container" onDoubleClick={this.toggleSaved.bind(this)}>
        <img className="ui image large rounded" src={this.props.image.url} />
        <i className={!!this.props.favorite ? "active star icon" : "star icon"} onClick={this.toggleSaved.bind(this)}/>
      </div>
    );
  }
}
