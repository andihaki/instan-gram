// action types
export const SHOW_SPINNER = "[ui] Show Spinner";
export const HIDE_SPINNER = "[ui] Hide Spinner";
export const HAS_ERROR_MESSAGE = "[ui] Error Message";

// action creators
export const showSpinner = () => ({
  type: SHOW_SPINNER
});
export const hideSpinner = () => ({
  type: HIDE_SPINNER
});
export const hasErrorMessage = data => ({
  type: HAS_ERROR_MESSAGE,
  payload: { data }
});
