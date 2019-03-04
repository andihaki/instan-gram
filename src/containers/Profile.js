import React from "react";
import { connect } from "react-redux";
import { Card, Avatar, Alert } from "antd";
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

class Profile extends React.Component {
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
  render() {
    const { error, loading, profile } = this.props;
    const { userPosts, addPostStart } = this.props;
    const { deletePost, editPost } = this.props;

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
        <AddPost addPostStart={addPostStart} />
        <UserPosts
          data={userPosts}
          isOwner={true}
          deletePost={deletePost}
          editPost={editPost}
        />
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
      dispatch(editPostStart(postId, title, body))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
