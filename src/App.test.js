import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow } from "./enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
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
