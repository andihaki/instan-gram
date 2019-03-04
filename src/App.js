import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "antd/dist/antd.css";

import CustomLayout from "./components/Layout";
import { connect } from "react-redux";
import { fetchUsersStart } from "./store/actions/usersAct";
import {
  fetchUserPostsStart,
  fetchPostStart,
  addPostStart
} from "./store/actions/userPostsAct";
import { fetchUserAlbumsStart } from "./store/actions/userAlbumsAct";
import { fetchAlbumPhotosStart } from "./store/actions/albumPhotosAct";
import { fetchPostCommentsStart } from "./store/actions/postCommentsAct";

// import Users from "./containers/Users";
import Loading from "./components/Loading";

const Home = () => <h1>HEY TAYO!!</h1>;
const Oops = () => <h1>Not Found</h1>;

const Users = React.lazy(() => import("./components/Users"));
const UserPosts = React.lazy(() => import("./components/UserPosts"));
const UserAlbums = React.lazy(() => import("./components/UserAlbums"));
const AlbumPhotos = React.lazy(() => import("./components/AlbumPhotos"));
const Post = React.lazy(() => import("./components/Post"));
const Profile = React.lazy(() => import("./containers/Profile"));

class App extends Component {
  componentDidMount() {
    const { location, fetchUsersStart, fetchUserPostsStart } = this.props;
    const { fetchUserAlbumsStart, fetchPostCommentsStart } = this.props;
    const { fetchAlbumPhotosStart } = this.props;
    const { fetchPostStart } = this.props;
    const currentUrl = location.pathname.replace("/", "") || "Home";

    // handle hard access at url
    if (currentUrl === "friends") {
      fetchUsersStart();
    }

    if (/posts/i.test(currentUrl)) {
      fetchUserPostsStart(parseInt(currentUrl.split("/")[0]));
    }
    if (/albums/i.test(currentUrl)) {
      fetchUserAlbumsStart(parseInt(currentUrl.split("/")[0]));
    }
    if (/post\//i.test(currentUrl)) {
      fetchPostCommentsStart(parseInt(currentUrl.split("/")[0]));
      fetchPostStart(parseInt(currentUrl.split("/")[2]));
    }
    if (/album\//i.test(currentUrl)) {
      fetchAlbumPhotosStart(parseInt(currentUrl.split("/")[0]));
    }
  }
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <CustomLayout {...this.props}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/friends"
              component={withSuspense(Users, this.props)}
            />
            <Route
              path="/:userId/posts"
              component={withSuspense(UserPosts, this.props)}
            />
            <Route
              path="/:userId/post/:postId"
              component={withSuspense(Post, this.props)}
            />
            <Route
              path="/:userId/albums"
              component={withSuspense(UserAlbums, this.props)}
            />
            <Route
              path="/:userId/album/:albumId"
              component={withSuspense(AlbumPhotos, this.props)}
            />
            <Route
              path="/profile"
              component={withSuspense(Profile, this.props)}
            />
            <Route component={Oops} />
          </Switch>
        </CustomLayout>
      </React.Fragment>
    );
  }
}

const withSuspense = (Component, props) => {
  const { loading, error } = props;
  const { users, userPosts, fetchUserPostsStart } = props;
  const { userAlbums, fetchUserAlbumsStart } = props;
  const { albumPhotos, fetchAlbumPhotosStart } = props;
  const { postComments, fetchPostCommentsStart } = props;
  const { singlePost, fetchPostStart } = props;
  const { profile, addPostStart } = props;
  const currentUrl = props.location.pathname.replace("/", "") || "Home";
  let data = [];

  if (currentUrl === "friends") {
    data = users;
  }
  if (currentUrl === "profile") {
    data = profile;
  }

  if (currentUrl.includes("album")) {
    data = albumPhotos;
  }
  if (currentUrl.includes("post")) {
    data = postComments;
  }

  if (currentUrl.includes("posts")) {
    data = userPosts;
  }
  if (currentUrl.includes("albums")) {
    data = userAlbums;
  }

  return props => (
    <React.Suspense fallback={<Loading />}>
      <Component
        {...props}
        data={data}
        singlePost={singlePost}
        loading={loading}
        error={error}
        fetchUserPostsStart={fetchUserPostsStart}
        fetchUserAlbumsStart={fetchUserAlbumsStart}
        fetchAlbumPhotosStart={fetchAlbumPhotosStart}
        fetchPostCommentsStart={fetchPostCommentsStart}
        fetchPostStart={fetchPostStart}
        addPostStart={addPostStart}
      />
    </React.Suspense>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.ui.loading,
    error: state.ui.error,

    users: state.users,
    userPosts: state.userPosts.userPosts,
    singlePost: state.userPosts.singlePost,
    userAlbums: state.userAlbums,
    albumPhotos: state.albumPhotos,
    postComments: state.postComments,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersStart: () => dispatch(fetchUsersStart()),
    fetchUserPostsStart: userId => dispatch(fetchUserPostsStart(userId)),
    fetchPostStart: postId => dispatch(fetchPostStart(postId)),
    fetchUserAlbumsStart: userId => dispatch(fetchUserAlbumsStart(userId)),
    fetchAlbumPhotosStart: albumId => dispatch(fetchAlbumPhotosStart(albumId)),
    fetchPostCommentsStart: postId => dispatch(fetchPostCommentsStart(postId)),
    addPostStart: (userId, title, body) =>
      dispatch(addPostStart(userId, title, body))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
