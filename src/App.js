import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

import CustomLayout from "./components/Layout";
// import Users from "./containers/Users";
import RomaRoute from "./routes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <CustomLayout>
            <RomaRoute />
          </CustomLayout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
