import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import SongPlaying from './components/SongPlaying';
import configureStore from './store/configureStore';
import SongList from './components/SongList';
import Playlist from './components/Playlist';


const store = configureStore();

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  background: #a5afd7;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  padding: 20px;
`;

const jsx = (
  <Provider store={store}>
    <Container>
      <SongPlaying />
      <Playlist />
      <SongList />      
    </Container>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
