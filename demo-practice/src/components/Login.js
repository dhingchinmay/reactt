import * as Yup from "yup";
import React from "react";
import { withFormik, Formik } from "formik";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// const axios = require("axios");
import axios from "axios";
// import Header from "./Header";
import { connect } from "react-redux";
import { login } from "./store/actions/uiActions";
import "./Login.css";
import { withRouter } from "react-router";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const TextFields = (props) => {
  const { errors, touched, handleBlur, handleChange, values, handleSubmit } =
    props;
  const classes = useStyles();

  useEffect(function () {
    const fetchData = async () => {
      const url = "http://localhost:3001/users/all";
      const response = await fetch(url);
      const data = await response.json();
      console.log("data is", data);
      return data;
    };
    const data = fetchData();
  }, []);

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //   },
  //   // onSubmit: (values) => {
  //   //   alert(JSON.stringify(values, null, 2));
  //   // },
  // });
  // const handleSubmit = (evt) => {
  //   const base_url = "http://localhost:3001/users/login";
  //   axios
  //     .post(base_url, formik.values)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  //   login();
  //   // console.log(JSON.stringify(data));
  // };

  const checkDisable = () => {
    if (errors.email || errors.name || errors.password) {
      return true;
    } else return false;
  };

  return (
    <>
      {/* <Header></Header> */}
      <div style={{ textAlign: "center" }}>
        <Container maxWidth="sm">
          <div className="container">
            <Typography
              component="div"
              style={{
                backgroundColor: "rgb(208, 214, 218)",
                height: "250px",
                padding: "15%",
                margin: "2rem auto",
                width: "250px",
                color: "black",
                borderRadius: "40px",
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
                    error
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    onBlur={handleBlur}
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    // error={formik.errors.email}
                    variant="outlined"
                    margin="dense"
                    onChange={handleChange}
                    // value={formik.values.email}
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
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
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
          </div>
        </Container>
      </div>
    </>
  );
};

const Form = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    name: "",
    email: "",
  }),
  validationSchema: (props) =>
    Yup.object().shape({
      email: Yup.string().email("Enter valid email").required(),
      password: Yup.string().required("Enter valid password"),
    }),
  async handleSubmit(values, { props }) {
    console.log("props", props);
    const base_url = "http://localhost:3001/users/login";
    axios
      .post(base_url, values)
      .then((response) => {
        let token = response.data.token;
        localStorage.setItem("token", token);
        props.login();
        console.log(response);
        props.history.push("/List");
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  displayName: "BasicForm",
})(TextFields);

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

// let token = response.data.token;
// localStorage.setItem("token", token);
