import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePlayingState, currentPlayingSong } from '../actions/playlist';

class Playing extends Component {
  handlePrevious() {
    const { playlist, currentPlayingSong } = this.props;
    const { playingSong } = this.props.playingSong;

    if (playlist.indexOf(playingSong) - 1 >= 0) {
      currentPlayingSong(playlist[playlist.indexOf(playingSong) - 1]);
    }
  }

  handleNext() {
    const { playlist, currentPlayingSong } = this.props;
    const { playingSong } = this.props.playingSong;

    if (playlist.indexOf(playingSong) + 1 !== playlist.length) {
      currentPlayingSong(playlist[playlist.indexOf(playingSong) + 1]);
    }
  }

  renderPlayPauseButton() {
    const { changePlayingState } = this.props;
    const { isPlaying } = this.props.playingSong;

    if (isPlaying) {
      return (
        <button onClick={() => changePlayingState(!isPlaying)}>Pause</button>
      );
    }
    return <button onClick={() => changePlayingState(!isPlaying)}>Play</button>;
  }

  render() {
    const { artist, album, title } = this.props.playingSong.playingSong;
    return (
      <div>
        <h1>Now Playing</h1>
        <div>Artist: {artist}</div>
        <div>Title: {title}</div>
        <div>Album: {album}</div>
        <button onClick={() => this.handlePrevious()}>Previous</button>
        {this.renderPlayPauseButton()}
        <button onClick={() => this.handleNext()}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playingSong: state.currentSong,
  playlist: state.playlist.songsInPlaylist
});

export default connect(
  mapStateToProps,
  { changePlayingState, currentPlayingSong }
)(Playing);
