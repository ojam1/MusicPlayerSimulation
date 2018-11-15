import axios from 'axios';
import { FETCH_ALL_SONGS } from './types';

const url = 'https://demo7014343.mockable.io';

export const allSongs = () => dispatch => {
  axios.get(url).then(returnedInformation => {
    dispatch({
      type: FETCH_ALL_SONGS,
      payload: returnedInformation.data
    });
  });
};
