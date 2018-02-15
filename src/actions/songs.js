import axios from 'axios';
import {
  FETCH_ALL_SONGS
} from './types';

const url = 'https://my.api.mockaroo.com/playlist?key=40ffa9b0';

export const allSongs = () => {
  return (dispatch) => {
    axios.get(url).then(returnedInformation => {
      dispatch({
        type: FETCH_ALL_SONGS,
        payload: returnedInformation.data
      });
    });
  };
};
