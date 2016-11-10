import React, { Component } from 'react';

export default class PictureList extends Component {
  constructor(props) {
    super(props);
  }

  renderImages() {
    const image = 'https://i.imgur.com/jHXkGJj.jpg';
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(i);
    }
    return (
      <div className="ui grid">
        {array.map(each => {
          return (
            <div className="four wide column">
              <img className="ui image" src={image}></img>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderImages()}
      </div>
    )
  }
}
