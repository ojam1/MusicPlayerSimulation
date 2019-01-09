import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSongToPlaylist } from '../actions/playlist';

class SongListItem extends Component {
  render() {
    const { song, addSongToPlaylist } = this.props;
    const { artist, album, title } = song;

    return (
      <div>
        <ul className='list-group'>
          <li className='list-group-item'>Artist: {artist}</li>
          <li className='list-group-item'>Title: {title}</li>
          <li className='list-group-item'>Album: {album}</li>
        </ul>
        <button
          className='btn btn-outline-primary btn-block'
          onClick={() => addSongToPlaylist(song)}
        >
          Add to playlist
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addSongToPlaylist }
)(SongListItem);
