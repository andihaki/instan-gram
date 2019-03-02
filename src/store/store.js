import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import users from "./reducers/users";

const pleaseManualDisableItOnProduction =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  users,
  compose(
    applyMiddleware(thunk),
    pleaseManualDisableItOnProduction
  )
);
