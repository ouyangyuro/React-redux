import React, { useEffect } from 'react';
import { UserCircleIcon } from '@heroicons/react/outline';

//====== below redux staff start ======//
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsAndUsers } from '../../actions';
//====== above redux staff end ======//

//====== below components start ======//
import UserHeader from '../Blog_pages/UserHeader';
//====== above components end ======//

function PostList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAndUsers()); //call api
    // Safe to add dispatch to the dependencies array (the React hooks lint rules do not know that dispatch should be stable, and will warn that the dispatch variable should be added to dependency arrays for useEffect and useCallback. The simplest solution is to do just that)
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);
  // console.log('state posts:', posts); //for check

  return (
    <>
      <div className="w-full px-4 py-16">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="w-full max-w-4xl p-2 mx-auto bg-gray-300 rounded-2xl mb-3"
            >
              <div className="flex items-center mb-2">
                <UserCircleIcon className="w-8 h-8 mr-3" />
                <h2 className="text-2xl">{post.title}</h2>
              </div>
              <p>{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PostList;
