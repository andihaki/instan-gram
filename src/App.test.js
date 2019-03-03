import React from "react";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import { shallow } from "./enzyme";
import App from "./App";

const mockStore = configureMockStore();

it("renders fine", () => {
  const store = mockStore({
    users: {
      users: [],
      loading: false
    }
  });

  const component = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // console.log(component.debug());
  expect(component.exists);
});
