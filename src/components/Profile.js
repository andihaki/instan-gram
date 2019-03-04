import React from "react";

import { Card, Avatar, Alert } from "antd";
import Logo from "../logo.svg";
import AddPost from "./AddPost";

const Profile = ({ data, loading, error, addPostStart }) =>
  error ? (
    <Alert message={error} type="warning" showIcon />
  ) : (
    <React.Fragment>
      <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
        <Card.Meta
          avatar={<Avatar src={Logo} />}
          title={data.username}
          description={data.name}
        />
      </Card>
      <AddPost addPostStart={addPostStart} />
    </React.Fragment>
  );

export default Profile;
