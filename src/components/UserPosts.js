import React from "react";
import { Link } from "react-router-dom";

import { List, Avatar, Alert } from "antd";
import Logo from "../logo.svg";

const UserPosts = ({
  data,
  loading,
  error,
  fetchPostCommentsStart,
  getSinglePost
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
            title={
              <Link
                to={"/" + item.userId + "/post/" + item.id}
                onClick={() => {
                  fetchPostCommentsStart(item.id);
                  getSinglePost(item.id);
                }}
              >
                {item.title}
              </Link>
            }
            description={item.body}
          />
        </List.Item>
      )}
    />
  );

// const UserPosts = props => console.log(props);

export default UserPosts;
