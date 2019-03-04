import axios from "axios";

import { showSpinner, hideSpinner, hasErrorMessage } from "./uiAct";
// action types
export const FETCH_USER_POSTS = "[user posts] Fetch";
export const FETCH_USER_POSTS_SUCCESS = "[user posts] Fetch Success";
export const FETCH_USER_POSTS_ERROR = "[user posts] Fetch Error";

export const GET_SINGLE_POST = "[user posts] Single Post";

export const ADD_POST = "[user posts] Add Post";
export const ADD_POST_ERROR = "[user posts] Add Post Error";
export const ADD_POST_SUCCESS = "[user posts] Add Post Success";

export const EDIT_POST = "[user posts] Edit Post";
export const DELETE_POST = "[user posts] Delete Post";

// action creators
export const fetchUserPosts = () => ({
  type: FETCH_USER_POSTS
});

export const fetchUserPostsSuccess = data => ({
  type: FETCH_USER_POSTS_SUCCESS,
  payload: { data }
});

export const fetchUserPostsError = () => ({
  type: FETCH_USER_POSTS_ERROR
});

export const getSinglePost = postId => ({
  type: GET_SINGLE_POST,
  payload: { postId }
});

export const addPost = () => ({
  type: ADD_POST
});

// middleware
export const fetchUserPostsStart = userId => {
  const URL = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  return dispatch => {
    dispatch(fetchUserPosts());
    dispatch(showSpinner());

    axios
      .get(URL)
      .then(response => {
        dispatch(fetchUserPostsSuccess(response.data));
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(fetchUserPostsError());
        dispatch(hasErrorMessage(error.message));
      });
  };
};

export const addPostStart = (userId, title, body) => {
  const URL = `https://jsonplaceholder.typicode.com/posts`;
  return dispatch => {
    dispatch(addPost());
    dispatch(showSpinner());

    axios
      .post(URL, { title, body, userId })
      .then(response => {
        console.log(response);
        // dispatch(addPostSuccess(response.data));
        dispatch(hideSpinner());
      })
      .catch(error => {
        // dispatch(addPostError());
        console.log(error.message);
        dispatch(hasErrorMessage(error.message));
      });
  };
};
