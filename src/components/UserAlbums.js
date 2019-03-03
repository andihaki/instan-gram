import React from "react";

import { Link } from "react-router-dom";

import { List, Alert, Card } from "antd";
import Logo from "../logo.svg";

const UserAlbums = ({ data, loading, error, fetchAlbumPhotosStart }) =>
  error ? (
    <Alert message={error} type="warning" showIcon />
  ) : (
    <List
      grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 4 }}
      itemLayout="horizontal"
      dataSource={data}
      loading={loading}
      renderItem={item => (
        <List.Item>
          <Link
            to={"/" + item.userId + "/album/" + item.id}
            onClick={() => fetchAlbumPhotosStart(item.id)}
          >
            <Card
              title={item.title}
              cover={<img alt={item.title} src={Logo} />}
            />
          </Link>
        </List.Item>
      )}
    />
  );

export default UserAlbums;
