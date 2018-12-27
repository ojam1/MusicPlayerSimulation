import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSongToPlaylist } from '../actions/playlist';

class SongListItem extends Component {
  render() {
    const { song, addSongToPlaylist } = this.props;
    const { artist, album, title } = song;

    return (
      <div>
        <div>Artist: {artist}</div>
        <div>Title: {title}</div>
        <div>Album: {album}</div>
        <button onClick={() => addSongToPlaylist(song)}>Add to playlist</button>
      </div>
    );
  }
}

export default connect(
  null,
  { addSongToPlaylist }
)(SongListItem);
