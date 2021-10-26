import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "Black", fontFamily: "cursive" }}>
        Registration Form!
      </h1>
      <form
        // className={classes.root}
        className={classes.center}
        autoComplete="off"
      >
        <div>
          <TextField label="First Name" required />
        </div>
        <div style={{ margin: "10px" }}>
          <TextField label="Last Name" required />
        </div>
        <div style={{ margin: "10px" }}>
          <TextField label="Email" type="email" required />
        </div>
        <div style={{ margin: "10px" }}>
          <TextField label="Password" type="password" required />
        </div>
      </form>
      <Button />
    </div>
  );
}
