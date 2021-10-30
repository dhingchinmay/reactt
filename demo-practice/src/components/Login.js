import React from "react";
import { useFormik } from "formik";
import { useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// const axios = require("axios");
import axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import { login } from "./store/actions/uiActions";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

function TextFields(props) {
  const { login } = props;

  // const classes = useStyles();
  const classes = {};

  useEffect(() => {
    const url = "http://localhost:3001/users/all";
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });
  const handleSubmit = (evt) => {
    const base_url = "http://localhost:3001/users/login";
    axios
      .post(base_url, formik.values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    login();
    // console.log(JSON.stringify(data));
  };

  return (
    <>
      <Header></Header>
      <div style={{ textAlign: "center" }}>
        <div className="container">
          <Container maxWidth="sm">
            <Typography
              component="div"
              style={{
                backgroundColor: "rgb(208, 214, 218)",
                height: "250px",
                padding: "15%",
                margin: "2rem auto",
                width: "250px",
                color: "black",
              }}
            >
              <h1 style={{ color: "Black", fontFamily: "sans-serif" }}>
                Login
              </h1>
              <form
                // className={classes.root}
                className={classes.center}
                autoComplete="off"
              >
                <div style={{ margin: "10px" }}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="dense"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required
                  />
                </div>
                <div style={{ margin: "10px" }}>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    requiredlabel="Password"
                    variant="outlined"
                    margin="dense"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    required
                  />
                </div>
                <Button
                  onClick={handleSubmit}
                  value="Submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Login
                </Button>
              </form>
            </Typography>
          </Container>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextFields);
