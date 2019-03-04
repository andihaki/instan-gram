import React from "react";
import { Button, Divider } from "antd";

const EditDeleteButton = ({
  isOwner,
  deletePost,
  editPost,
  postId,
  title,
  body,
  showModal
}) =>
  isOwner ? (
    <React.Fragment>
      <Button type="danger" onClick={() => deletePost(postId)}>
        Delete
      </Button>
      <Divider type="vertical" />
      {/* <Button
        type="primary"
        icon="edit"
        onClick={() => editPost(postId, "TEST title", "TEST body")}
      >
        Edit
      </Button> */}
      <Button
        type="primary"
        onClick={() => showModal(postId, title, body)}
        icon="edit"
      >
        Edit
      </Button>
    </React.Fragment>
  ) : null;

export default EditDeleteButton;
