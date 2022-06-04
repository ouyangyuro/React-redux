// Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

//====== below Song Actions ======//
//選擇歌曲
export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

//====== below Blog Actions ======//
//透過此 function call api "dispatch(action)"
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //need to await because we need to getState() 需要posts的userId
  await dispatch(fetchPosts());
  // console.log('end fetch', getState().posts); //for check

  //===way 1===//
  //一樣的'userId'只會回傳一次到陣列中
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // console.log('Action userIds:', userIds); //for check

  //將陣列中的id各別打api
  userIds.forEach((id) => dispatch(fetchUser(id)));

  //===way 2===//
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach((id) => dispatch(fetchUser(id)))
  //   .value();
};

//透過redux-thunk打API拿資料
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };
};

//透過redux-thunk打API拿資料 (same like export above, just shorter)
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
