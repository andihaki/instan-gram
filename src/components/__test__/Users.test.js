import React from "react";
import Users from "../Users";
import { shallow, mount } from "../../enzyme";

it("renders users list", () => {
  const users = [
    { id: 1, name: "a" },
    { id: 2, name: "a" },
    { id: 3, name: "a" }
  ];
  const component = mount(<Users data={users} loading={false} />);
  // console.log(component.debug());
  expect(component.find("div.ant-list-item").length).toEqual(3);
});
