import React from "react";
import { NavLink } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

const CustomLayout = props => {
  // console.log(window && window.location.pathname);
  // console.log(props);
  const { children } = props;
  let breadcrumb = props.location.pathname.replace("/", "") || "Home";
  breadcrumb = breadcrumb.split("/")[1] || breadcrumb;

  const fetchUsers = () => {
    // console.log(props);
    const { users, fetchUsersStart } = props;
    if (!users.length) {
      fetchUsersStart();
    }
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/friends" onClick={fetchUsers}>
              Friends
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/not-found">404</NavLink>
          </Menu.Item>
          <Menu.Item key="4" style={{ float: "right" }}>
            <NavLink to="/profile">Profile</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
            {breadcrumb}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>InstanGram © 2019</Footer>
    </Layout>
  );
};

export default CustomLayout;
