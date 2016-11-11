import React, { Component } from 'react';

import Picture from './picture.component';

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
      <div className="ui container four column doubling grid">
        {array.map(each => {
          return (
            <div className="column" key={each.toString()}>
              <Picture imageUrl={image} saved={each % 2} />
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
