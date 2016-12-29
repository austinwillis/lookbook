import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Pictures } from '../../imports/api/pictures.js';
import { createContainer } from 'meteor/react-meteor-data';
import Modal from 'react-awesome-modal';

import Picture from './picture.component';
import { Favorites } from '../../imports/api/favorites.js';

class PictureList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = { favorites: false, modalVisible: false, pic: { url: 'none' } };
  }

  toggleFavorites() {
    this.setState(prevState => ({
      favorites: !prevState.favorites
    }));
  }

  openModal(pic) {
    this.setState({
      modalVisible: true,
      pic: pic
    });
  }

  closeModal() {
    this.setState({
      modalVisible: false
    });
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
      <div onClick={() => this.openModal(pic)} className="column" key={pic._id}>
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
        <Modal
            visible={this.state.modalVisible}
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
        >
          <div>
            <Picture image={this.state.pic} favorite={this.state.pic.favorite} />
          </div>
        </Modal>
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
    pictures: Pictures.find({}, {sort: {created: -1}}).fetch(),
    currentUser: Meteor.user()
  };
}, PictureList);
