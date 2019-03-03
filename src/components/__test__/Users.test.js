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

// link is clickAble
it("link can be click", () => {
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
  expect(mockFunction).toHaveBeenCalledTimes(1);
  component.unmount();
});

// unfinished
it("render posts when clicked", () => {
  const mockFunction = jest.fn().mockImplementation(request => {
    return new Promise((resolve, reject) => {
      const response = {
        userPosts: [
          {
            userId: 1,
            id: 1,
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body:
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body:
              "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            userId: 1,
            id: 3,
            title:
              "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body:
              "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          }
        ]
      };
      resolve(response);
    });
  });
  // console.log(mockFunction.mockReturnValueOnce());
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
  expect(mockFunction).toHaveBeenCalledTimes(1);
  component.unmount();
});
