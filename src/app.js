import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SongPlaying from './components/SongPlaying';
import configureStore from './store/configureStore';
import SongList from './components/SongList';
import Playlist from './components/Playlist';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div className="container-fluid">
      <SongPlaying />
      <Playlist />
      <SongList />
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
