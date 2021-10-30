// import Login from "../components/Login";
// import { List } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import Registration from "../components/Registration";

export default function AppRoutes() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/List">
            <List />
          </Route> */}
      </div>
    </Router>
  );
}
