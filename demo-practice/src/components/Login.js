import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function TextFields() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center" }}>
      <div className="container">
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{
              backgroundColor: "rgb(208, 214, 218)",
              height: "50%",
              padding: "2px",
              margin: "2rem auto",
              width: "100%",
              color: "black",
            }}
          >
            <h1 style={{ color: "Black", fontFamily: "sans-serif" }}>Login</h1>
            <form
              // className={classes.root}
              className={classes.center}
              autoComplete="off"
            >
              <div style={{ margin: "10px" }}>
                <TextField label="Email" type="email" required />
              </div>
              <div style={{ margin: "10px" }}>
                <TextField label="Password" type="password" required />
              </div>
            </form>
            <Button variant="contained" color="primary" disableElevation>
              Login
            </Button>
          </Typography>
        </Container>
      </div>
    </div>
  );
}
