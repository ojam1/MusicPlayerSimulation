import {
    REMOVE_SONG,
    ADD_SONG
} from '../actions/types';

const INITIAL_STATE = {
    songsInPlaylist: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_SONG:
            return { ...state, songsInPlaylist: [...state.songsInPlaylist, action.payload] };
        case REMOVE_SONG:
            return { ...state, songsInPlaylist: state.songsInPlaylist.filter(item => item.id !== action.payload.id) };
        default:
            return state;
    }
};
