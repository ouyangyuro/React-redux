import { combineReducers } from 'redux';

// Reducers (Departments)

const songReducer = () => {
  return [
    { title: 'Part of Me', duration: '3:10' },
    { title: 'Maraschino Love', duration: '3:20' },
    { title: 'Cold', duration: '4:00' },
    { title: 'History', duration: '3:30' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

const postsReducer = (state = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload;
  }
  return state;
};

//將Reducers function放進來
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
  posts: postsReducer,
});
