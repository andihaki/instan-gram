import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import users from "./reducers/users";
import userPosts from "./reducers/userPosts";
import ui from "./reducers/ui";

const reducers = combineReducers({
  users: users,
  userPosts: userPosts,
  ui: ui
});

// dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(reducers, enhancer);
