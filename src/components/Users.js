import React from "react";
import { Link } from "react-router-dom";

import { List, Avatar, Alert } from "antd";
import Logo from "../logo.svg";

const Users = ({ data, loading, error, clickedUrl }) =>
  error ? (
    <Alert message={error} type="warning" showIcon />
  ) : (
    <List
      itemLayout="horizontal"
      dataSource={data}
      loading={loading}
      renderItem={item => (
        <List.Item onClick={() => clickedUrl(item.id)}>
          <List.Item.Meta
            avatar={<Avatar src={Logo} />}
            title={<Link to={"/" + item.id + "/posts"}>{item.username}</Link>}
            description={item.name + " - " + item.phone + " - " + item.email}
          />
        </List.Item>
      )}
    />
  );

export default Users;
