import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "../actions/usersAct";

const users = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload.data.filter(id => id.id !== 1);
    case FETCH_USERS_ERROR:
    case FETCH_USERS:
    default:
      return state;
  }
};

export default users;
