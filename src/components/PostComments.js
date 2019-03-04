import React, { useState } from "react";

import { List, Avatar, Alert, Comment } from "antd";
import Logo from "../logo.svg";

import { Form, Input, Button } from "antd";
const Editor = ({ addPostComments }) => {
  const [comment, setComment] = useState(null);
  return (
    <div>
      <Form.Item>
        <Input.TextArea
          rows={4}
          onChange={e => setComment(e.target.value)}
          value={comment}
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={false}
          onClick={() =>
            addPostComments({ name: "Leanne Graham", body: comment, id: 123 })
          }
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
};

const AddComment = ({ addPostComments }) => (
  <Comment
    avatar={<Avatar src={Logo} alt="Han Solo" />}
    content={<Editor addPostComments={addPostComments} />}
  />
);

const PostComments = ({
  data,
  loading,
  error,
  addPostComments,
  deletePostComments,
  isOwner
}) =>
  error ? (
    <Alert message={error} type="warning" showIcon />
  ) : (
    <React.Fragment>
      <AddComment
        handleChange={e => console.log(e.target.value)}
        addPostComments={addPostComments}
      />
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <React.Fragment>
            <Comment
              actions={item.actions}
              author={item.name}
              avatar={<Avatar src={Logo} />}
              content={item.body}
              datetime={item.datetime}
            />
            {isOwner && (
              <Button type="danger" onClick={() => deletePostComments(item.id)}>
                Delete
              </Button>
            )}
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );

export default PostComments;
