import { FETCH_PROFILE_SUCCESS } from "../actions/profileAct";

const profile = (state = [], action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default profile;
