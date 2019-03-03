import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "antd/dist/antd.css";

import CustomLayout from "./components/Layout";
import { connect } from "react-redux";
import { fetchUsersStart } from "./store/actions/usersAct";
import { fetchUserPostsStart } from "./store/actions/userPostsAct";

// import Users from "./containers/Users";
import Loading from "./components/Loading";

const Home = () => <h1>HEY TAYO!!</h1>;
const Oops = () => <h1>Not Found</h1>;
const Users = React.lazy(() => import("./components/Users"));
const UserPosts = React.lazy(() => import("./components/UserPosts"));

class App extends Component {
  componentDidMount() {
    const currentUrl = this.props.location.pathname.replace("/", "") || "Home";

    if (currentUrl === "friends") {
      this.props.fetchUsersStart();
    }
    // naif, replace with regex soon
    if (currentUrl.includes("posts")) {
      this.props.fetchUserPostsStart(parseInt(currentUrl.split("/")[0]));
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
  const currentUrl = props.location.pathname.replace("/", "") || "Home";
  let data = null;

  if (currentUrl === "friends") {
    data = users;
  }
  // naif, replace with regex soon
  if (currentUrl.includes("posts")) {
    data = userPosts;
  }
  return props => (
    <React.Suspense fallback={<Loading />}>
      <Component
        {...props}
        data={data}
        loading={loading}
        error={error}
        clickedUrl={id => fetchUserPostsStart(id)}
      />
    </React.Suspense>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.ui.loading,
    error: state.ui.error,

    users: state.users,
    userPosts: state.userPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersStart: () => dispatch(fetchUsersStart()),
    fetchUserPostsStart: userId => dispatch(fetchUserPostsStart(userId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
