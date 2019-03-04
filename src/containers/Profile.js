import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Card, Avatar, Alert, Modal, Input } from "antd";
import Logo from "../logo.svg";
import AddPost from "../components/AddPost";
import UserPosts from "../components/UserPosts";

import {
  fetchUserPostsStart,
  fetchProfileStart,
  addPostStart,
  deletePostStart,
  editPostStart
} from "../store/actions/profileAct";

import { fetchPostCommentsStart } from "../store/actions/postCommentsAct";
import { fetchPostStart } from "../store/actions/userPostsAct";

class Profile extends React.Component {
  state = { visible: false, userId: null, title: null, body: null };
  componentDidMount() {
    const { profile, userPosts } = this.props;
    const { fetchUserPostsStart, fetchProfileStart } = this.props;

    if (!userPosts.length) {
      fetchUserPostsStart(1);
    }
    if (!profile.length && profile.name === undefined) {
      fetchProfileStart(1);
    }
  }
  handleOk = e => {
    console.log(e, this.state.visible);
    this.setState(
      {
        visible: false
      },
      () => {
        this.props.editPost(
          this.state.userId,
          this.state.title,
          this.state.body
        );
      }
    );
  };
  showModal = (e, a, b) => {
    // console.log(e, a, b);
    this.setState({
      visible: true,
      title: a,
      body: b,
      userId: e
    });
  };
  handleTitleChange = e => {
    // console.log(e.target);
    this.setState({
      title: e.target.value
    });
  };
  handleDescriptionChange = e => {
    // console.log(e.target);
    this.setState({
      body: e.target.value
    });
  };
  render() {
    const { error, loading, profile } = this.props;
    const { userPosts, addPostStart } = this.props;
    const { deletePost, editPost } = this.props;
    const { fetchPostCommentsStart, fetchPostStart } = this.props;

    if (error) {
      return <Alert message={error} type="warning" showIcon />;
    }
    return (
      <React.Fragment>
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Card.Meta
            avatar={<Avatar src={Logo} />}
            title={profile && profile.username}
            description={profile && profile.name}
          />
        </Card>
        <AddPost func={addPostStart} buttonText="Add Post" />
        <UserPosts
          {...this.props}
          data={userPosts}
          isOwner={true}
          deletePost={deletePost}
          editPost={editPost}
          showModal={(a, b, c) => this.showModal(a, b, c)}
          fetchPostCommentsStart={fetchPostCommentsStart}
          fetchPostStart={fetchPostStart}
        />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          {/* <AddPost func={editPostStart} buttonText="Edit" /> */}
          <h4>Title</h4>
          <Input
            placeholder="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <h4>description</h4>
          <Input.TextArea
            autosize={{ minRows: 2 }}
            placeholder="description"
            value={this.state.body}
            onChange={this.handleDescriptionChange}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.ui.loading,
    error: state.ui.error,

    profile: state.profile.detail,
    userPosts: state.profile.userPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPostsStart: userId => dispatch(fetchUserPostsStart(userId)),
    fetchProfileStart: userId => dispatch(fetchProfileStart(userId)),
    addPostStart: (userId, title, body) =>
      dispatch(addPostStart(userId, title, body)),
    deletePost: postId => dispatch(deletePostStart(postId)),
    editPost: (postId, title, body) =>
      dispatch(editPostStart(postId, title, body)),
    fetchPostCommentsStart: postId => dispatch(fetchPostCommentsStart(postId)),
    fetchPostStart: postId => dispatch(fetchPostStart(postId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
