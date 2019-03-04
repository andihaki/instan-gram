import {
  FETCH_PROFILE_SUCCESS,
  FETCH_USER_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  EDIT_POST_SUCCESS
} from "../actions/profileAct";
import { updatedObject } from "../utils";

const initialState = {
  detail: [],
  userPosts: []
};

const fetchProfileSuccess = (state, action) => {
  return updatedObject(state, {
    detail: action.payload.data
  });
};

const fetchUserPostsSuccess = (state, action) => {
  return updatedObject(state, {
    userPosts: action.payload.data
  });
};

const addPostSuccess = (state, action) => {
  const { data } = action.payload;
  // const userPosts = state.userPosts.concat(data);
  const userPosts = [data, ...state.userPosts];

  return updatedObject(state, {
    userPosts
  });
};

const deletePostSuccess = (state, action) => {
  const { data: userId } = action.payload;
  const userPosts = state.userPosts.filter(post => post.id !== userId);
  console.log(userId, userPosts);
  return updatedObject(state, {
    userPosts
  });
};

const editPostSuccess = (state, action) => {
  const { data } = action.payload;
  // // const post = state.userPosts.filter(post => post.id === data.id);
  // console.log(data.id, state.userPosts);
  // const userPosts = [
  //   ...state.userPosts.slice(0, data.id - 1),
  //   data,
  //   ...state.userPosts.slice(data.id)
  // ];
  // console.log("[profile] editPostSuccess", userPosts);

  // return updatedObject(state, {
  //   userPosts
  // });
  const userPosts = state.userPosts.map((item, index) => {
    // console.log(item, index, data.id);
    if (item.id !== data.id) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      title: data.title,
      body: data.body
    };
  });
  return updatedObject(state, {
    userPosts
  });
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return fetchProfileSuccess(state, action);
    case FETCH_USER_POSTS_SUCCESS:
      return fetchUserPostsSuccess(state, action);
    case ADD_POST_SUCCESS:
      return addPostSuccess(state, action);
    case DELETE_POST_SUCCESS:
      return deletePostSuccess(state, action);
    case EDIT_POST_SUCCESS:
      return editPostSuccess(state, action);

    default:
      return state;
  }
};

export default profile;
