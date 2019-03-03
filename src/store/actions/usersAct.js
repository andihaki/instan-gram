import axios from "axios";

import { showSpinner, hideSpinner, hasErrorMessage } from "./uiAct";

// list of action types
export const FETCH_USERS = "[users] Fetch";
export const FETCH_USERS_SUCCESS = "[users] Fetch Success";
export const FETCH_USERS_ERROR = "[users] Fetch Error";

// list of action creators
export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const fetchUsersSuccess = data => ({
  type: FETCH_USERS_SUCCESS,
  payload: { data }
});

export const fetchUsersError = error => ({
  type: FETCH_USERS_ERROR
});

// middleware
const URL = "https://jsonplaceholder.typicode.com/users";
export const fetchUsersStart = () => {
  return dispatch => {
    dispatch(fetchUsers());
    dispatch(showSpinner());

    axios
      .get(URL)
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(fetchUsersError());
        dispatch(hasErrorMessage(error.message));
      });
  };
};
