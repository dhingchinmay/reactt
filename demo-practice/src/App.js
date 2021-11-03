import Header from "../src/components/Header";
import List from "../src/components/List";
import Registration from "../src/components/Registration";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/components/Login";
import Addemployee from "../src/components/Addemployee";
import { useEffect } from "react";
import { checkLogin } from "./components/store/actions/uiActions";
import { useDispatch } from "react-redux";
import Main from "./components/Main";
function App() {
  return <Main />;
}

export default App;
