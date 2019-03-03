import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  HAS_ERROR_MESSAGE
} from "../actions/uiAct";
import { updatedObject } from "../utils";

const showSpinner = state => {
  return updatedObject(state, {
    loading: true
  });
};

const hideSpinner = state => {
  return updatedObject(state, {
    loading: false
  });
};

const hasErrorMessage = (state, action) => {
  console.log(action.payload.data);
  return updatedObject(state, {
    error: action.payload.data
  });
};

const ui = (state = { loading: false, error: null }, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return showSpinner(state);
    case HIDE_SPINNER:
      return hideSpinner(state);
    case HAS_ERROR_MESSAGE:
      return hasErrorMessage(state, action);
    default:
      return state;
  }
};

export default ui;
