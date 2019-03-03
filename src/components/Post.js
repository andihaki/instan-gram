import React from "react";

import { Card } from "antd";
import PostComments from "./PostComments";

const CardPost = ({ title, body }) => (
  <Card title={title} bordered={false}>
    <p>{body}</p>
  </Card>
);

const Post = props => {
  // const { title, body } = props.singlePost;
  return (
    <React.Fragment>
      <CardPost {...props.singlePost} />
      <PostComments {...props} />
    </React.Fragment>
  );
};

export default Post;
