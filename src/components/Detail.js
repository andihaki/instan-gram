import React from "react";

import { Link } from "react-router-dom";

import { Divider } from "antd";

const Detail = ({ userId }) => (
  <div>
    Show
    <Divider type="vertical" />
    <Link to={"/" + userId + "/posts"}>Posts</Link>
    <Divider type="vertical" />
    <Link to={"/" + userId + "/albums"}>Albums</Link>
    <Divider type="vertical" />
    <Link to={"/" + userId + "/photos"}>Photos</Link>
  </div>
);

export default Detail;
