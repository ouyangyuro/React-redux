import { combineReducers } from 'redux';

// Reducers (Departments)

//====== below Song Reducers ======//
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

//====== below Blog Reducers ======//
const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

const usersReducer = (state = [], action) => {
  if (action.type === 'FETCH_USER') {
    return [...state, action.payload];
  }
  return state;
};

//將Reducers function放進來
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
  posts: postsReducer,
  users: usersReducer,
});
