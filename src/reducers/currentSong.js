import { PLAYING_SONG, CHANGE_PLAYING_STATE } from '../actions/types';

const INITIAL_STATE = {
  playingSong: {},
  isPlaying: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYING_SONG:
      return { playingSong: action.payload, isPlaying: true };
    case CHANGE_PLAYING_STATE:
      return { ...state, isPlaying: action.payload };
    default:
      return state;
  }
};
