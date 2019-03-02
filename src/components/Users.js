import React from "react";

import { List, Avatar } from "antd";
import Loading from "../components/Loading";
import Logo from "../logo.svg";

const Users = ({ data, loading }) =>
  loading ? (
    <Loading />
  ) : (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={Logo} />}
            title={<a href="https://ant.design">{item.username}</a>}
            description={item.name + " - " + item.phone + " - " + item.email}
          />
        </List.Item>
      )}
    />
  );

export default Users;
