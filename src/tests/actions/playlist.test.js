import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { addSongToPlaylist, removeSongFromPlaylist, currentPlayingSong } from '../../actions/playlist';
import { ADD_SONG, REMOVE_SONG, PLAYING_SONG } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('playlist actions', () => {
    it('should add song to playlist', () => {
        const expectedAction = addSongToPlaylist({
            song: 'any'
        });

        const store = mockStore({});

        store.dispatch(expectedAction);

        expect(store.getActions()).toEqual([{
            type: ADD_SONG,
            payload: {
                song: 'any'
            }
        }]);
    });

    it('should remove song from playlist', () => {
        const expectedAction = removeSongFromPlaylist({
            song: 'any'
        });

        const store = mockStore({});

        store.dispatch(expectedAction);

        expect(store.getActions()).toEqual([{
            type: REMOVE_SONG,
            payload: {
                song: 'any'
            }
        }]);
    });

    it('should get current playing song from playlist', () => {
        const expectedAction = currentPlayingSong({
            song: 'any'
        });

        const store = mockStore({});

        store.dispatch(expectedAction);

        expect(store.getActions()).toEqual([{
            type: PLAYING_SONG,
            payload: {
                song: 'any'
            }
        }]);
    });
});
