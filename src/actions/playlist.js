import {
  REMOVE_SONG,
  ADD_SONG,
  PLAYING_SONG,
  CHANGE_PLAYING_STATE
} from './types';

export const addSongToPlaylist = song => dispatch => {
  dispatch({
    type: ADD_SONG,
    payload: song
  });
};

export const removeSongFromPlaylist = song => dispatch => {
  dispatch({
    type: REMOVE_SONG,
    payload: song
  });
};

export const currentPlayingSong = song => dispatch => {
  dispatch({
    type: PLAYING_SONG,
    payload: song
  });
};

export const changePlayingState = isPlaying => ({
  type: CHANGE_PLAYING_STATE,
  payload: isPlaying
});
