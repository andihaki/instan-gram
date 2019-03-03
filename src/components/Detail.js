import React from "react";

import { Link } from "react-router-dom";

import { Divider } from "antd";

const Detail = ({ userId, fetchUserPostsStart, fetchUserAlbumsStart }) => (
  <div>
    Show
    <Divider type="vertical" />
    <Link
      to={"/" + userId + "/posts"}
      onClick={() => fetchUserPostsStart(userId)}
    >
      Posts
    </Link>
    <Divider type="vertical" />
    <Link
      to={"/" + userId + "/albums"}
      onClick={() => fetchUserAlbumsStart(userId)}
    >
      Albums
    </Link>
    <Divider type="vertical" />
    <Link to={"/" + userId + "/photos"}>Photos</Link>
  </div>
);

export default Detail;
