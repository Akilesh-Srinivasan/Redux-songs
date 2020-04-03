import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'perfect', duration: '4:05'},
        { title: 'without me', duration: '3:05'},
        { title: 'bad girl', duration: '5:05'},
        { title: 'weekend', duration: '2:05'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});