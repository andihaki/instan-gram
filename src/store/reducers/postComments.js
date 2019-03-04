import {
  FETCH_POST_COMMENTS_SUCCESS,
  ADD_POST_COMMENTS,
  DELETE_POST_COMMENTS
} from "../actions/postCommentsAct";

// import { updatedObject } from "../utils";

// const addPostComments = (state, action) => {
//   return updatedObject(state, {
//     action.payload.data
//   })
// }

const postComments = (state = [], action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS_SUCCESS:
      return action.payload.data;
    case ADD_POST_COMMENTS:
      return [action.payload.data, ...state];
    case DELETE_POST_COMMENTS:
      return state.filter(comment => comment.id !== action.payload.data);
    default:
      return state;
  }
};

export default postComments;
