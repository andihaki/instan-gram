import { FETCH_USER_ALBUMS_SUCCESS } from "../actions/userAlbumsAct";

const userAlbums = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_ALBUMS_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default userAlbums;
