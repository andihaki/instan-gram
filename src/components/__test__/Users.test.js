import React from "react";
import { BrowserRouter } from "react-router-dom";
import Users from "../Users";
import { mount, shallow } from "../../enzyme";

it("renders users list", () => {
  const users = [
    { id: 1, name: "a" },
    { id: 2, name: "a" },
    { id: 3, name: "a" }
  ];
  const component = mount(
    <BrowserRouter>
      <Users data={users} loading={false} error={false} />
    </BrowserRouter>
  );
  // console.log(component.debug());
  expect(component.find("div.ant-list-item").length).toEqual(3);
  component.unmount();
});

it("users loading", () => {
  const component = mount(
    <BrowserRouter>
      <Users data={[]} loading={true} error={false} />
    </BrowserRouter>
  );
  // console.log(component.debug());
  expect(component.find("div.ant-list-loading").exists()).toBe(true);
  component.unmount();
});

it("has error message", () => {
  const component = mount(
    <BrowserRouter>
      <Users data={[]} loading={false} error="it's disasta" />
    </BrowserRouter>
  );
  // console.log(component.debug());
  expect(component.find("div.ant-alert.ant-alert-warning").exists()).toBe(true);
  component.unmount();
});

// hmmm something wrong
it("render posts when clicked", () => {
  const mockFunction = jest.fn();
  const users = [
    { id: 1, name: "a" },
    { id: 2, name: "a" },
    { id: 3, name: "a" }
  ];
  const component = mount(
    <BrowserRouter>
      <Users
        data={users}
        loading={false}
        error={false}
        clickedUrl={mockFunction}
      />
    </BrowserRouter>
  );

  const aLink = component.find("h4.ant-list-item-meta-title a").at(1);
  aLink.simulate("click");
  // console.log(component.debug());
  expect(mockFunction).toHaveBeenCalled();
  component.unmount();
});
