import React from "react";
import { connect } from "react-redux";

import { fetchUsersStart } from "../store/actions/usersAct";

import Loading from "../components/Loading";

class Users extends React.Component {
  componentDidMount() {
    this.props.fetchUsersStart();
  }
  render() {
    const { users } = this.props;
    let userList = "";

    if (users.length) {
      userList = (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    }

    console.log(this.props);

    if (!users) {
      return <Loading />;
    }

    return (
      <React.Fragment>
        <h1>Users List</h1>
        {userList}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.users
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
