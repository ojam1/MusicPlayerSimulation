import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { removeSongFromPlaylist, currentPlayingSong } from '../actions/playlist';


const Button = styled.button`
background: purple;
border: none;
color: white;
font-weight: 100;
padding: 1rem;
`;

const Divider = styled.div`
width:5px;
height:auto;
display:inline-block;
`;

const SongText = styled.div`
  text-align: left;
`;

class PlaylistItem extends Component {
  render() {
    const { song, currentPlayingSong, removeSongFromPlaylist } = this.props
    const { artist, album, title } = song;

    return (
      <div>
        <SongText>Artist: {artist}</SongText>
        <SongText>Title: {title}</SongText>
        <SongText>Album: {album}</SongText>
        <Button onClick={() => currentPlayingSong(song)}>
          Play
        </Button>
        <Divider />
        <Button onClick={() => removeSongFromPlaylist(song)}>
          Remove song from playlist
        </Button>
      </div>
    );
  }
}

export default connect(null, { removeSongFromPlaylist, currentPlayingSong })(PlaylistItem);
