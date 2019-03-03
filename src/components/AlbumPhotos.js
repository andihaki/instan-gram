import React from "react";

import { Link } from "react-router-dom";

import { List, Avatar, Alert } from "antd";
import Logo from "../logo.svg";

const AlbumPhotos = ({ data, loading, error }) =>
  error ? (
    <Alert message={error} type="warning" showIcon />
  ) : (
    <List
      itemLayout="horizontal"
      dataSource={data}
      loading={loading}
      pagination="true"
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={Logo} />}
            title={<Link to="#">{item.title}</Link>}
            description={item.body}
          />
        </List.Item>
      )}
    />
  );

export default AlbumPhotos;
