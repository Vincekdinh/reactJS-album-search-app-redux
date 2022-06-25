import React, { Component } from "react";

class AlbumItem extends Component {
  render() {
    const { artworkUrl100, collectionName } = this.props.album

    return (
      <div className="ui card">
        <div className="image">
          <img alt={collectionName} src={artworkUrl100}/>
        </div>
        <div className="content">
          <h4 className="ui header">{collectionName}</h4>
          </div>
        </div>
    );
  }
}

export default AlbumItem;

