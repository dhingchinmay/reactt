import { AppRegistration, Login } from "@mui/icons-material";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from "../components/Registration";

export default function AppRoutes() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
