import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import PlaylistItem from './PlaylistItem';

class Playlist extends Component {
  render() {
    return (
      <div>
        <h1>Playlist</h1>
        <div>
          {
            this.props.playlist.map((song) => <PlaylistItem key={uuid()} song={song} />)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlist: state.playlist.songsInPlaylist
});

export default connect(mapStateToProps, null)(Playlist);
