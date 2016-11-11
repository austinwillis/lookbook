import React, { Component } from 'react';

export default class Picture extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = {
      saved: this.props.saved,
    };
  }

  toggleSaved() {
    this.setState((prevState, props) => {
      return { saved: prevState.saved ? false : true };
    });
  }

  render() {
    return (
      <div className="picture-container">
        <img className="ui image large rounded" src={this.props.imageUrl} />
        <i className={this.state.saved ? "active star icon" : "star icon"} onClick={this.toggleSaved.bind(this)}/>
      </div>
    );
  }
}
