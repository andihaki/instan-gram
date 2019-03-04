import {
  FETCH_USER_POSTS_SUCCESS,
  FETCH_POST_SUCCESS
} from "../actions/userPostsAct";

import { updatedObject } from "../utils";

const fetchUserPostsSuccess = (state, action) => {
  return updatedObject(state, {
    userPosts: action.payload.data
  });
};

const fetchPostSuccess = (state, action) => {
  return updatedObject(state, {
    singlePost: action.payload.data
  });
};

const initialState = {
  userPosts: [],
  singlePost: []
};
const userPosts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS_SUCCESS:
      return fetchUserPostsSuccess(state, action);
    case FETCH_POST_SUCCESS:
      return fetchPostSuccess(state, action);
    default:
      return state;
  }
};

export default userPosts;
