import React from "react";
import ReactDOM from "react-dom";

import Users from "../Users";
import { mount } from "../../enzyme";

it("renders without crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Users />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders users list", () => {
  const component = mount(<Users />);

  const users = [
    { id: 1, name: "a" },
    { id: 2, name: "a" },
    { id: 3, name: "a" }
  ];
  component.setState({ users: users });
  // console.log(component.debug());
  expect(component.find("li").length).toEqual(3);
});