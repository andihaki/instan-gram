import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";

import CustomLayout from "./components/Layout";
import { connect } from "react-redux";
import { fetchUsersStart } from "./store/actions/usersAct";

// import Users from "./containers/Users";
import Loading from "./components/Loading";

const Home = () => <h1>HEY TAYO!!</h1>;
const Oops = () => <h1>Not Found</h1>;
const Users = React.lazy(() => import("./components/Users"));

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchUsersStart();
  // }
  render() {
    return (
      <React.Fragment>
        <Router>
          <CustomLayout {...this.props}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/friends"
                component={withSuspense(Users, this.props)}
              />
              <Route component={Oops} />
            </Switch>
          </CustomLayout>
        </Router>
      </React.Fragment>
    );
  }
}

const withSuspense = (Component, props) => {
  const { users, loading } = props;
  return props => (
    <React.Suspense fallback={<Loading />}>
      <Component {...props} data={users} loading={loading} />
    </React.Suspense>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersStart: () => dispatch(fetchUsersStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
