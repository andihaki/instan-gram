import React from "react";
import { NavLink } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

const CustomLayout = ({ children }) => (
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
          <NavLink to="/users">Users</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/not-found">404</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px", marginTop: 64 }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default CustomLayout;
