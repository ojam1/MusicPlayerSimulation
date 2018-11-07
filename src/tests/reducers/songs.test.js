import reducer from '../../reducers/songs'
import {
    FETCH_ALL_SONGS
  } from '../../actions/types';

describe('current song reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual([{}]);
    });

    it('should handle FETCH_ALL_SONGS', () => {
        expect(reducer({}, {
            type: FETCH_ALL_SONGS,
            payload: 'any'
        })
        ).toEqual('any');
    });
});
