import {
  FETCH_USER_POSTS_SUCCESS,
  GET_SINGLE_POST
} from "../actions/userPostsAct";

import { updatedObject } from "../utils";

const fetchUserPostsSuccess = (state, action) => {
  return updatedObject(state, {
    userPosts: action.payload.data
  });
};

const getSinglePost = (state, action) => {
  const { postId } = action.payload;
  let singlePost = null;
  if (state.userPosts.length) {
    singlePost = state.userPosts.slice(postId - 1, postId)[0];
  }
  return updatedObject(state, {
    singlePost
  });
};

const initialState = {
  userPosts: [],
  singlePost: { title: null, body: null }
};
const userPosts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS_SUCCESS:
      return fetchUserPostsSuccess(state, action);
    case GET_SINGLE_POST:
      return getSinglePost(state, action);
    default:
      return state;
  }
};

export default userPosts;
