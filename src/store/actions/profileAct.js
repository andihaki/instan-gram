import axios from "axios";

import { showSpinner, hideSpinner, hasErrorMessage } from "./uiAct";

// action types
export const FETCH_PROFILE = "[profile] Fetch";
export const FETCH_PROFILE_ERROR = "[profile] Fetch Error";
export const FETCH_PROFILE_SUCCESS = "[profile] Fetch Success";

export const FETCH_USER_POSTS = "[profile] Posts Fetch";
export const FETCH_USER_POSTS_SUCCESS = "[profile] Posts Fetch Success";
export const FETCH_USER_POSTS_ERROR = "[profile] Posts Fetch Error";

export const ADD_POST = "[profile] Add Post";
export const ADD_POST_ERROR = "[profile] Add Post Error";
export const ADD_POST_SUCCESS = "[profile] Add Post Success";

export const DELETE_POST = "[profile] Delete Post";
export const DELETE_POST_ERROR = "[profile] Delete Post Error";
export const DELETE_POST_SUCCESS = "[profile] Delete Post Success";

export const EDIT_POST = "[profile] Edit Post";
export const EDIT_POST_ERROR = "[profile] Edit Post Error";
export const EDIT_POST_SUCCESS = "[profile] Edit Post Success";

// action creators
export const fetchProfile = () => ({
  type: FETCH_PROFILE
});
export const fetchProfileError = () => ({
  type: FETCH_PROFILE_ERROR
});
export const fetchProfileSuccess = data => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: { data }
});

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

export const addPost = () => ({
  type: ADD_POST
});
export const addPostError = () => ({
  type: ADD_POST_ERROR
});
export const addPostSuccess = data => ({
  type: ADD_POST_SUCCESS,
  payload: { data }
});

export const deletePost = () => ({
  type: DELETE_POST
});
export const deletePostError = () => ({
  type: DELETE_POST_ERROR
});
export const deletePostSuccess = data => ({
  type: DELETE_POST_SUCCESS,
  payload: { data }
});

export const editPost = () => ({
  type: EDIT_POST
});
export const editPostError = () => ({
  type: EDIT_POST_ERROR
});
export const editPostSuccess = data => ({
  type: EDIT_POST_SUCCESS,
  payload: { data }
});

// middleware
export const fetchProfileStart = userId => {
  const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
  return dispatch => {
    dispatch(fetchProfile());
    dispatch(showSpinner());

    axios
      .get(URL)
      .then(response => {
        dispatch(fetchProfileSuccess(response.data));
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(fetchProfileError());
        dispatch(hasErrorMessage(error.message));
      });
  };
};

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
        dispatch(addPostSuccess(response.data));
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(addPostError());
        dispatch(hasErrorMessage(error.message));
      });
  };
};

export const deletePostStart = postId => {
  const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  return dispatch => {
    dispatch(deletePost());
    dispatch(showSpinner());

    axios
      .delete(URL)
      .then(response => {
        dispatch(deletePostSuccess(postId));
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(deletePostError());
        dispatch(hasErrorMessage(error.message));
      });
  };
};

export const editPostStart = (postId, title, body) => {
  const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  return dispatch => {
    dispatch(editPost());
    dispatch(showSpinner());

    axios
      .patch(URL, { title, body })
      .then(response => {
        console.log("profile patch", response.data);
        dispatch(editPostSuccess(response.data));
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(editPostError());
        dispatch(hasErrorMessage(error.message));
      });
  };
};
