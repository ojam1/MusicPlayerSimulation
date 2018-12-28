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
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

  return store;
};
