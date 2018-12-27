import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongListItem from './SongListItem';

import { allSongs } from '../actions/songs';

export class SongList extends Component {
  componentWillMount() {
    this.props.allSongs();
  }

  render() {
    return (
      <div>
        <h1>Available Songs</h1>
        <div>
          {this.props.songs.map(song => (
            <SongListItem key={song.id} song={song} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.song
});

export default connect(
  mapStateToProps,
  { allSongs }
)(SongList);
