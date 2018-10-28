import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { addSongToPlaylist } from '../../actions/playlist';
import { ADD_SONG } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    it('should set add song to playlist action object', () => {

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
});
