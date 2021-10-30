import Header from "../src/components/Header";
import List from "../src/components/List";
import Registration from "../src/components/Registration";
import "./App.css";
// import AppRoutes from "./Router/Router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/components/Login";
import Adduser from "../src/components/Adduser";
// import Logout from "../src/components/Logout";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Adduser">
            <Adduser />
          </Route>
          <Route path="/List">
            <List />
          </Route>
          {/* <Route path="/Logout">
            <Logout />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
