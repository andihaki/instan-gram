import React from "react";
import { Route, Switch } from "react-router-dom";

import Users from "./containers/Users";

const Home = () => <h1>HEY TAYO!!</h1>;
const Oops = () => <h1>Not Found</h1>;

const RomaRoute = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route component={Oops} />
    </Switch>
  </React.Fragment>
);

export default RomaRoute;
