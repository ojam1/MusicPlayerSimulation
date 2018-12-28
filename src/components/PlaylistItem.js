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
        <ul className='list-group'>
          <li className='list-group-item'>Artist: {artist}</li>
          <li className='list-group-item'>Title: {title}</li>
          <li className='list-group-item'>Album: {album}</li>
        </ul>
        <button
          className='btn btn-outline-primary'
          onClick={() => currentPlayingSong(song)}
        >
          Play
        </button>
        <button
          className='btn btn-outline-primary'
          onClick={() => removeSongFromPlaylist(song)}
        >
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
