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
    <div className='container-fluid'>
      <div className='row justify-content-around'>
        <SongPlaying className='col d-flex justify-content-center' />
        <Playlist className='col' />
      </div>
      <p className='center'>
        <button
          className='btn btn-outline-primary'
          data-toggle='collapse'
          data-target='#collapseExample'
          aria-expanded='false'
          aria-controls='collapseExample'
        >
          Show All Songs
        </button>
      </p>
      <div className='collapse' id='collapseExample'>
        <SongList/>
      </div>
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
