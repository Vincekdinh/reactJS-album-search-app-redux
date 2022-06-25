import React, { Component } from "react";

class AlbumItem extends Component {
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.album.artworkUrl100}/>
        </div>
        <div className="content">
          <h4 className="ui header">{this.props.album.collectionCensoredName}</h4>
          </div>
        </div>
    );
  }
}

export default AlbumItem;

