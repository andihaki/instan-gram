import React from "react";
import { connect } from "react-redux";

import { fetchUsersStart } from "../store/actions/usersAct";

import Loading from "../components/Loading";

class Users extends React.Component {
  componentDidMount() {
    this.props.fetchUsersStart();
  }
  render() {
    const { users, loading, error } = this.props;

    if (error) {
      return <div>{error}</div>;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <React.Fragment>
        <h1>Users List</h1>
        <ul>
          {users.length &&
            users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.users,
    loading: state.loading,
    error: state.error
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
)(Users);
