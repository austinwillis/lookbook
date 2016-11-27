import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Pictures } from '../../imports/api/pictures.js';
import { createContainer } from 'meteor/react-meteor-data';
import Picture from './picture.component';
import { Favorites } from '../../imports/api/favorites.js';
import PicModal from './picmodal.component';

class PictureList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = { favorites: false };
  }

  toggleFavorites() {
    this.setState(prevState => ({
      favorites: !prevState.favorites
    }));
  }

  markFavorites() {
    this.props.pictures = this.props.pictures.map(pic => {
      this.props.favorites.forEach(fav => {
        if (fav.picture === pic._id._str) {
          pic.favorite = fav._id;
          fav.pic = pic;
        }
      });
    });
  }

  toggleButton() {
    if (!!this.props.currentUser) {
      return (
        <div>
          <button href='#' onClick={() => this.toggleFavorites()}
            className={this.state.favorites ? "active ui button" : "ui button"}>
            Favorites Only
          </button>
        </div>
      );
    }
  }

  renderAllPictures() {
    return (
      <div className="ui container four column doubling grid">
        {this.props.pictures.map(each => {
          return this.pictureDiv(each)
        })}
      </div>
    );
  }

  pictureDiv(pic) {
    return (
      <div className="column" key={pic._id}>
        <Picture image={pic} favorite={pic.favorite} />
      </div>
    );
  }

  renderFavoritePictures() {
    return (
      <div className="ui container four column doubling grid">
        {this.props.favorites.map(fav => {
          return this.pictureDiv(fav.pic);
        })}
      </div>
    );
  }

  render() {
    this.markFavorites();
    return (
      <div>
        {this.toggleButton()}
        {this.state.favorites ? this.renderFavoritePictures() : this.renderAllPictures()}
      </div>
    );
  }
}

PictureList.propTypes = {
  pictures: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('pictures');
  Meteor.subscribe('favorites');

  return {
    favorites: Favorites.find({}).fetch(),
    pictures: Pictures.find({}).fetch(),
    currentUser: Meteor.user()
  };
}, PictureList);
