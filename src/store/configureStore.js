import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import songReducer from '../reducers/songs';
import playlistReducer from '../reducers/playlist';
import currentSongReducer from '../reducers/currentSong';

export default () => {
  const store = createStore(
    combineReducers({
      song: songReducer,
      playlist: playlistReducer,
      currentSong: currentSongReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
