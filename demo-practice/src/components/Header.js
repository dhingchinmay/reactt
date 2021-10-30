import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Button style={{ margin: "0 10px" }} href="/List" variant="contained">
            List
          </Button>
          <Button
            style={{ margin: "0 10px" }}
            href="AddUser"
            variant="contained"
          >
            Add User
          </Button>
          <Button style={{ margin: "0 10px" }} href="Login" variant="contained">
            Sign In
          </Button>
          <Button
            style={{ margin: "0 10px" }}
            href="Registration"
            variant="contained"
          >
            Sign Up
          </Button>
          <Button
            style={{ margin: "0 10px" }}
            href="Logout"
            variant="contained"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
