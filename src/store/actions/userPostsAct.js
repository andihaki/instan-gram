import axios from "axios";

import { showSpinner, hideSpinner, hasErrorMessage } from "./uiAct";
// action types
export const FETCH_USER_POSTS = "[user posts] Fetch";
export const FETCH_USER_POSTS_SUCCESS = "[user posts] Fetch Success";
export const FETCH_USER_POSTS_ERROR = "[user posts] Fetch Error";

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
