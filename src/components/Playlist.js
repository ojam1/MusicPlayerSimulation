import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import PlaylistItem from './PlaylistItem';

export class Playlist extends Component {
  render() {
    const { playlist } = this.props;

    return (
      <div>
        <h1 className='text-center'>Playlist</h1>
        <div className='pre-scrollable'>
          {playlist.length == 0 ? (
            <h2 className='text-center'>No songs in playlist</h2>
          ) : (
            playlist.map(song => <PlaylistItem key={uuid()} song={song} />)
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist.songsInPlaylist
});

export default connect(
  mapStateToProps,
  null
)(Playlist);
