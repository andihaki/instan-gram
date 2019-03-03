import { FETCH_POST_COMMENTS_SUCCESS } from "../actions/postCommentsAct";

const postComments = (state = [], action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default postComments;
