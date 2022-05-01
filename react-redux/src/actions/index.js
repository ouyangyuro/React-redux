// Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

//選擇歌曲
export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

//箭頭函示 way:透過redux-thunk打API拿資料
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

//一般函式 way:透過redux-thunk打API拿資料
// export const fetchPosts = () => {
//   return async function (dispatch) {
//     const response = await jsonPlaceholder.get('/posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };
