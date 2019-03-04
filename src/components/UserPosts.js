import React from "react";
import { Link } from "react-router-dom";

import { List, Avatar, Alert } from "antd";
import Logo from "../logo.svg";
import EditDeleteButton from "./EditDeleteButton";

const UserPosts = ({
  data,
  loading,
  error,
  fetchPostCommentsStart,
  fetchPostStart,
  isOwner,
  deletePost,
  editPost,
  showModal
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
                  fetchPostStart(item.id);
                }}
              >
                {item.title}
              </Link>
            }
            description={item.body}
          />
          <EditDeleteButton
            isOwner={isOwner}
            deletePost={deletePost}
            editPost={editPost}
            postId={item.id}
            title={item.title}
            body={item.body}
            showModal={showModal}
          />
        </List.Item>
      )}
    />
  );

// const UserPosts = props => console.log(props);

export default UserPosts;
