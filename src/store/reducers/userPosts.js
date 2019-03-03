import {
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_ERROR
} from "../actions/userPostsAct";

const userPosts = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_POSTS_SUCCESS:
      return action.payload.data;
    case FETCH_USER_POSTS:
    case FETCH_USER_POSTS_ERROR:
    default:
      return state;
  }
};

export default userPosts;
