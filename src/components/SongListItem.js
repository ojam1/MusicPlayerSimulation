import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addSongToPlaylist } from '../actions/playlist';


const Button = styled.button`
background: purple;
border: none;
color: white;
font-weight: 500;
padding: 1.2rem;
`;

const SongText = styled.div`
  text-align: left;
  font-weight: bold;
`;

class SongListItem extends Component {
  render() {
    const { artist, album, title } = this.props.song;

    return (
      <div>
        <SongText>Artist: {artist}</SongText>
        <SongText>Title: {title}</SongText>
        <SongText>Album: {album}</SongText>
        <Button onClick={() => this.props.addSongToPlaylist(this.props.song)}>
          Add to playlist
        </Button>
      </div>
    );
  }
}

export default connect(null, { addSongToPlaylist })(SongListItem);
