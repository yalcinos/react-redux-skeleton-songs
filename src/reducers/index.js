import {combineReducers} from 'redux';

const songsReducer = () => {
    return[
        {title: 'No Scribs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:00'}
    ];
}

const selectedSongsReducer = (selectedSong=null,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongsReducer
});