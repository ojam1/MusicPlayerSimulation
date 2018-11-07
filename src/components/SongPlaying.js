import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { changePlayingState, currentPlayingSong } from '../actions/playlist';

const Button = styled.button`
background: purple;
border: none;
color: white;
font-weight: 100;
padding: 1rem;
`;

const SongText = styled.div`
  text-align: left;
`;

const Header = styled.h1`
  font-weight: bold;
`;
const Divider = styled.div`
width:5px;
height:auto;
display:inline-block;
`;


class Playing extends Component {
  handlePrevious() {
    const { playlist } = this.props;
    const { playingSong } = this.props.playingSong;

    if ((playlist.indexOf(playingSong)) - 1 > 0) {
      this.props.currentPlayingSong(playlist[playlist.indexOf(playingSong) - 1]);
    }
  }

  handleNext() {
    const { playlist } = this.props;
    const { playingSong } = this.props.playingSong;

    if ((playlist.indexOf(playingSong)) + 1 !== playlist.length) {
      this.props.currentPlayingSong(playlist[playlist.indexOf(playingSong) + 1]);
    }
  }

  renderPlayPauseButton() {
    if (this.props.playingSong.isPlaying) {
      return (
        <Button onClick={() => this.props.changePlayingState(!this.props.playingSong.isPlaying)}>
          Pause
          </Button>
      );
    }
    return (
      <Button onClick={() => this.props.changePlayingState(!this.props.playingSong.isPlaying)}>
        Play
        </Button>
    );
  }

  render() {
    const { artist, album, title } = this.props.playingSong.playingSong;

    return (
      <div>
        <Header>Now Playing</Header>
        <SongText>Artist: {artist}</SongText>
        <SongText>Title: {title}</SongText>
        <SongText>Album: {album}</SongText>
        <Button onClick={() => this.handlePrevious()}>Previous</Button>
        <Divider />
        {this.renderPlayPauseButton()}
        <Divider />
        <Button onClick={() => this.handleNext()}>Next</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playingSong: state.currentSong,
  playlist: state.playlist.songsInPlaylist
});

export default connect(mapStateToProps, { changePlayingState, currentPlayingSong })(Playing);
