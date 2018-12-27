import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  removeSongFromPlaylist,
  currentPlayingSong
} from '../actions/playlist';

class PlaylistItem extends Component {
  render() {
    const { song, currentPlayingSong, removeSongFromPlaylist } = this.props;
    const { artist, album, title } = song;

    return (
      <div>
        <div>Artist: {artist}</div>
        <div>Title: {title}</div>
        <div>Album: {album}</div>
        <button onClick={() => currentPlayingSong(song)}>Play</button>
        <button onClick={() => removeSongFromPlaylist(song)}>
          Remove song from playlist
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { removeSongFromPlaylist, currentPlayingSong }
)(PlaylistItem);
