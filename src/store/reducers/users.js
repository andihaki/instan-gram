import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "../actions/usersAct";
import { updatedObject } from "../utils";

const initialState = {
  error: null,
  loading: false,
  users: []
};

const fetchUsers = state => {
  return updatedObject(state, {
    loading: true
  });
};

const fetchUsersSuccess = (state, action) => {
  return updatedObject(state, {
    users: action.payload.data,
    loading: false
  });
};

const fetchUsersError = (state, action) => {
  return updatedObject(state, {
    loading: false,
    error: action.payload.error
  });
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return fetchUsers(state);
    case FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action);
    case FETCH_USERS_ERROR:
      return fetchUsersError(state, action);
    default:
      return state;
  }
};

export default users;
