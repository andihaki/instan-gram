import React from "react";
import { BrowserRouter } from "react-router-dom";
import UserPosts from "../UserPosts";
import { mount } from "../../enzyme";

it("renders user posts list", () => {
  const users = [
    { id: 1, name: "a" },
    { id: 2, name: "a" },
    { id: 3, name: "a" }
  ];
  const component = mount(
    <BrowserRouter>
      <UserPosts data={users} loading={false} error={false} />
    </BrowserRouter>
  );
  // console.log(component.debug());
  expect(component.find("div.ant-list-item").length).toEqual(3);
});

it("user posts loading", () => {
  const component = mount(
    <BrowserRouter>
      <UserPosts data={[]} loading={true} error={false} />
    </BrowserRouter>
  );
  // console.log(component.debug());
  expect(component.find("div.ant-list-loading").exists()).toBe(true);
});

it("has error message", () => {
  const component = mount(
    <BrowserRouter>
      <UserPosts data={[]} loading={false} error="it's disasta" />
    </BrowserRouter>
  );
  // console.log(component.debug());
  expect(component.find("div.ant-alert.ant-alert-warning").exists()).toBe(true);
});
