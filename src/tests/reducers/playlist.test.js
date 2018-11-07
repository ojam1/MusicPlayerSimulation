import reducer from '../../reducers/playlist'
import {
    REMOVE_SONG,
    ADD_SONG
} from '../../actions/types';

describe('current song reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            songsInPlaylist: []
        });
    });

    it('should handle ADD_SONG', () => {
        expect(reducer({
            songsInPlaylist: [
                'song1'
            ]
        }, {
            type: ADD_SONG,
            payload: 'any'
        })
        ).toEqual({
            songsInPlaylist: [
                'song1',
                'any'
            ]
        });
    });

    it('should handle REMOVE_SONG', () => {
        expect(reducer({
            songsInPlaylist: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        }, {
            type: REMOVE_SONG,
            payload: {
                id: 2
            }
        })
        ).toEqual({
            songsInPlaylist: [
                {
                    id: 1
                }
            ]
        });
    });
});
