import axios from "axios";

import { showSpinner, hideSpinner, hasErrorMessage } from "./uiAct";

// action types
export const FETCH_USER_ALBUMS = "[user albums] Fetch";
export const FETCH_USER_ALBUMS_ERROR = "[user albums] Fetch Error";
export const FETCH_USER_ALBUMS_SUCCESS = "[user albums] Fetch Success";

// action creators
export const fetchUserAlbums = () => ({
  type: FETCH_USER_ALBUMS
});

export const fetchUserAlbumsError = () => ({
  type: FETCH_USER_ALBUMS_ERROR
});

export const fetchUserAlbumsSuccess = data => ({
  type: FETCH_USER_ALBUMS_SUCCESS,
  payload: { data }
});

// middleware
export const fetchUserAlbumsStart = userId => {
  const URL = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
  return dispatch => {
    dispatch(fetchUserAlbums());
    dispatch(showSpinner());

    axios
      .get(URL)
      .then(response => {
        dispatch(fetchUserAlbumsSuccess(response.data));
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(fetchUserAlbumsError());
        dispatch(hasErrorMessage(error.message));
      });
  };
};
