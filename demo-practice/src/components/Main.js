import Header from "./Header";
import List from "./List";
import Registration from "./Registration";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Addemployee from "./Addemployee";
import { useEffect } from "react";
import { checkLogin } from "./store/actions/uiActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const Main = (props) => {
  useEffect(() => {
    console.log("Effect runnig");
    props.checkLogin();
  }, []);
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
          <Route path="/Addemployee">
            <Addemployee />
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
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      checkLogin,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Main);
