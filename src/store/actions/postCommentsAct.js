import axios from "axios";

import { showSpinner, hideSpinner, hasErrorMessage } from "./uiAct";

// action types
export const FETCH_POST_COMMENTS = "[post comments] Fetch";
export const FETCH_POST_COMMENTS_ERROR = "[post comments] Fetch Error";
export const FETCH_POST_COMMENTS_SUCCESS = "[post comments] Fetch Success";

export const ADD_POST_COMMENTS = "[post comments] Add";

export const DELETE_POST_COMMENTS = "[post comments] Delete";

// action creators
export const fetchPostComments = () => ({
  type: FETCH_POST_COMMENTS
});
export const fetchPostCommentsError = () => ({
  type: FETCH_POST_COMMENTS_ERROR
});
export const fetchPostCommentsSuccess = data => ({
  type: FETCH_POST_COMMENTS_SUCCESS,
  payload: { data }
});

export const addPostComments = data => ({
  type: ADD_POST_COMMENTS,
  payload: { data }
});
export const deletePostComments = data => ({
  type: DELETE_POST_COMMENTS,
  payload: { data }
});

// middleware
export const fetchPostCommentsStart = postId => {
  const URL = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
  return dispatch => {
    dispatch(fetchPostComments());
    dispatch(showSpinner());

    axios
      .get(URL)
      .then(response => {
        dispatch(fetchPostCommentsSuccess(response.data));
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(fetchPostCommentsError());
        dispatch(hasErrorMessage(error.message));
      });
  };
};
