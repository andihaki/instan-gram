import { FETCH_ALBUM_PHOTOS_SUCCESS } from "../actions/albumPhotosAct";

const albumPhotos = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALBUM_PHOTOS_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default albumPhotos;
