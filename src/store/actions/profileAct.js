import axios from "axios";

import { showSpinner, hideSpinner, hasErrorMessage } from "./uiAct";

// action types
export const FETCH_PROFILE = "[profile] Fetch";
export const FETCH_PROFILE_ERROR = "[profile] Fetch Error";
export const FETCH_PROFILE_SUCCESS = "[profile] Fetch Success";

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
