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

  renderPlayPause() {
    const { isPlaying } = this.props.playingSong;

    return isPlaying ? <h1>Playing</h1> : <h1>Paused</h1>;
  }

  renderPlayPauseButton() {
    const { isPlaying } = this.props.playingSong;

    return isPlaying ? (
      <span className='fas fa-pause-circle' />
    ) : (
      <span className='fas fa-play-circle' />
    );
  }

  render() {
    const { changePlayingState } = this.props;
    const { isPlaying } = this.props.playingSong;
    const { artist, album, title } = this.props.playingSong.playingSong;

    return (
      <div className='d-flex flex-column justify-content-center'>
        {this.renderPlayPause()}
        <div>Artist: {artist}</div>
        <div>Title: {title}</div>
        <div>Album: {album}</div>
        <div className='btn-group'>
          <button
            className='btn btn-outline-primary'
            onClick={() => this.handlePrevious()}
          >
            <span className='fas fa-arrow-alt-circle-left' />
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => changePlayingState(!isPlaying)}
          >
            {this.renderPlayPauseButton()}
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => this.handleNext()}
          >
            <span className='fas fa-arrow-alt-circle-right' />
          </button>
        </div>
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
