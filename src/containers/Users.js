import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: [],
    isLoading: false,
    isError: false
  };
  getUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => this.setState({ users: response.data }))
      .catch(error => console.error(error));
  }
  componentDidMount() {
    this.getUsers();
  }
  render() {
    const { users } = this.state;
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
    return (
      <React.Fragment>
        <h1>Users List</h1>
        {userList}
      </React.Fragment>
    );
  }
}

export default Users;
