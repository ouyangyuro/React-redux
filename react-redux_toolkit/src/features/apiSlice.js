import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

//call api
export const getPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(baseURL + '/posts');
    // console.log('response', response); //for check
    return response.data;
  } catch (err) {
    // console.log('fetchPosts err:', err); //for check
    return err.message;
  }
});

const initialState = {
  posts: [],
  status: 'idle', //'idle | 'loading' | 'success' | 'failed'
  error: null,
};

export const apiSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    //call api 階段回傳
    [getPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default apiSlice.reducer;
