import React from "react";

import { List, Alert } from "antd";
import { Card } from "antd";

const { Meta } = Card;

const Photo = ({ title, thumbnailUrl }) => (
  <Card
    hoverable="true"
    cover={<img alt={title} src={thumbnailUrl} style={{ height: "25vh" }} />}
  >
    <Meta title={title} description={title} style={{ height: "60px" }} />
  </Card>
);

const AlbumPhotos = ({ data, loading, error }) =>
  error ? (
    <Alert message={error} type="warning" showIcon />
  ) : (
    <List
      itemLayout="horizontal"
      size="small"
      dataSource={data}
      loading={loading}
      pagination={{ pageSize: 8 }}
      grid={{ gutter: 16, column: 4 }}
      renderItem={item => (
        <List.Item>
          <Photo {...item} />
        </List.Item>
      )}
    />
  );

export default AlbumPhotos;
