import React from "react";
import { Route, Switch } from "react-router-dom";

import Users from "./containers/Users";

const Home = () => <h1>HEY TAYO!!</h1>;
const Oops = () => <h1>Not Found</h1>;

// const Users = React.lazy(() => import("./containers/Users"));
// import Loading from "./components/Loading";

const RomaRoute = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />

      {/* <React.Suspense fallback={<Loading />}>
        <Route path="/users" component={Users} />
      </React.Suspense> */}
      <Route path="/users" component={Users} />

      <Route component={Oops} />
    </Switch>
  </React.Fragment>
);

export default RomaRoute;
