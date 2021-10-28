import Header from "../src/components/Header";
import List from "../src/components/List";
import Registration from "../src/components/Registration";
import "./App.css";
import AppRoutes from "./Router/Router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../src/components/Login";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/Registration">
          <Registration />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/List">
          <List />
        </Route>
      </Router>
      <AppRoutes />
    </div>
  );
}

export default App;
