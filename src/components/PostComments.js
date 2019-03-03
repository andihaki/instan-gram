import React from "react";

import { List, Avatar, Alert, Comment } from "antd";
import Logo from "../logo.svg";

const PostComments = ({ data, loading, error, fetchAlbumPhotosStart }) =>
  error ? (
    <Alert message={error} type="warning" showIcon />
  ) : (
    <List
      className="comment-list"
      header={`${data.length} replies`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <Comment
          actions={item.actions}
          author={item.name}
          avatar={<Avatar src={Logo} />}
          content={item.body}
          datetime={item.datetime}
        />
      )}
    />
  );

export default PostComments;
