import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { allSongs } from '../../actions/songs';
import mockAxios from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('song action', () => {
    it('gets all songs', () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: [{ "id": 1, "artist": "Erika McTerry", "title": "id nulla ultrices", "album": "tincidunt in", "duration": 3.25 }]
            })
        );

        const expectedAction = allSongs();

        const store = mockStore({});

        store.dispatch(expectedAction);

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith('https://demo7014343.mockable.io');
    });
});
