import reducer from '../../reducers/currentSong'
import {
    PLAYING_SONG,
    CHANGE_PLAYING_STATE
  } from '../../actions/types';

describe('current song reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            playingSong: [],
            isPlaying: true
        });
    });

    it('should handle PLAYING_SONG', () => {
        expect(reducer([], {
            type: PLAYING_SONG,
            payload: 'any'
        })
        ).toEqual({
            playingSong: 'any'
        });
    });

    it('should handle CHANGE_PLAYING_STATE', () => {
        expect(reducer([], {
            type: CHANGE_PLAYING_STATE,
            payload: 'any'
        })
        ).toEqual({
            isPlaying: 'any'
        });
    });
});
