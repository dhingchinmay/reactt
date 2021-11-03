import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Form from "./Addemployee";
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

// const handleClose = () => {
//   setOpen(false);
// };

const Header = (props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const { isLoggedIn } = props;

  function handleLogOut() {
    localStorage.setItem("userToken", "");
    localStorage.clear();
    window.location.href = "/Login";
    // history.push("/Login"); // whichever component you want it to route to
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
          {isLoggedIn && (
            <Button
              style={{ margin: "0 10px" }}
              variant="contained"
              onClick={handleClickOpen}
            >
              Add Employee
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
        {open && <Form open={open} onClose={onClose} />}
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
