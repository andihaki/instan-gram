import axios from "axios";

import { showSpinner, hideSpinner, hasErrorMessage } from "./uiAct";

// action types
export const FETCH_ALBUM_PHOTOS = "[album Photos] Fetch";
export const FETCH_ALBUM_PHOTOS_ERROR = "[album Photos] Fetch Error";
export const FETCH_ALBUM_PHOTOS_SUCCESS = "[album Photos] Fetch Success";

// action creators
export const fetchAlbumPhotos = () => ({
  type: FETCH_ALBUM_PHOTOS
});

export const fetchAlbumPhotosError = () => ({
  type: FETCH_ALBUM_PHOTOS_ERROR
});

export const fetchAlbumPhotosSuccess = data => ({
  type: FETCH_ALBUM_PHOTOS_SUCCESS,
  payload: { data }
});

// middleware
export const fetchAlbumPhotosStart = albumId => {
  const URL = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
  return dispatch => {
    dispatch(fetchAlbumPhotos());
    dispatch(showSpinner());

    axios
      .get(URL)
      .then(response => {
        dispatch(fetchAlbumPhotosSuccess(response.data));
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(fetchAlbumPhotosError());
        dispatch(hasErrorMessage(error.message));
      });
  };
};
