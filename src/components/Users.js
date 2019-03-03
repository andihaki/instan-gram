import React from "react";

import { List, Avatar, Alert } from "antd";
import Logo from "../logo.svg";
import Detail from "../components/Detail";

const Users = ({
  data,
  loading,
  error,
  fetchUserPostsStart,
  fetchUserAlbumsStart
}) =>
  error ? (
    <Alert message={error} type="warning" showIcon />
  ) : (
    <List
      itemLayout="horizontal"
      dataSource={data}
      loading={loading}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={Logo} />}
            title={item.username + "(" + item.name + ")"}
            description={
              <Detail
                userId={item.id}
                fetchUserPostsStart={fetchUserPostsStart}
                fetchUserAlbumsStart={fetchUserAlbumsStart}
              />
            }
          />
          {item.email} | company: {item.company.name}
        </List.Item>
      )}
    />
  );

export default Users;
