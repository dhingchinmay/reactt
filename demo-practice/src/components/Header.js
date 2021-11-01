import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { isLoggedIn } = props;

  function handleLogOut() {
    localStorage.setItem("userToken", "");
    localStorage.clear();
    window.location.href = "/Login";
    // history.push("/Login"); // whichever component you want it to route to
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Employees
          </Typography>
          {isLoggedIn && (
            <Button
              style={{ margin: "0 10px" }}
              href="/List"
              color="primary"
              variant="outlined"
            >
              List
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              style={{ margin: "0 10px" }}
              href="AddUser"
              variant="contained"
            >
              Add User
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              style={{ margin: "0 10px" }}
              href="Login"
              variant="contained"
            >
              Sign In
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              style={{ margin: "0 10px" }}
              href="Registration"
              variant="contained"
            >
              Sign Up
            </Button>
          )}
          {isLoggedIn && (
            <Button
              style={{ margin: "0 10px" }}
              color="secondary"
              variant="contained"
              onClick={handleLogOut}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,
  };
};
export default withRouter(connect(mapStateToProps, null)(Header));
