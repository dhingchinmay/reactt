import * as Yup from "yup";
import React, { useEffect } from "react";
import { withFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const axios = require("axios");
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const BasicTextFields = (props) => {
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

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Enter name "),
  //   email: Yup.string().email().required("ENter"),
  //   password: Yup.string().required("ENter"),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: (props) =>
  //     Yup.object().shape({
  //       email: Yup.string().email("Enter valid email"),
  //     }),
  // });
  // console.log(formik.errors);
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const base_url = "http://localhost:3001/users/register";
  //   axios
  //     .post(base_url, values)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  //   // console.log(JSON.stringify(data));
  // };
  // console.log("errors", errors);
  const checkDisable = () => {
    if (errors.email || errors.name || errors.password) {
      return true;
    } else return false;
  };
  return (
    <>
      {/* <Header></Header> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "White",
            height: "70%",
            width: "50%",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography component="div">
            <h1 style={{ color: "Black", fontFamily: "sans-serif" }}>
              Registration
            </h1>
            <form className={classes.center} autoComplete="off">
              <div>
                <TextField
                  error
                  id="name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  margin="dense"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  fullWidth
                  required
                />
              </div>
              <TextField
                error
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="dense"
                value={values.email}
                onBlur={handleBlur}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                // error={formik.errors.email}
                onChange={handleChange}
                // value={formik.values.email}
                fullWidth
                required
              />
              {/* </div> */}
              {/* <div style={{ margin: "10px" }}> */}
              <TextField
                error
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
                fullWidth
              />
              {/* </div> */}
              <div style={{ margin: "10px" }}>
                <Button
                  onClick={handleSubmit}
                  disabled={checkDisable()}
                  value="Submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                >
                  Register
                </Button>
              </div>
              <Link to="/Login" variant="body2">
                Existing Account ? Sign In here
              </Link>
            </form>
          </Typography>
        </div>
      </div>
    </>
  );
};
const Form = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    name: "",
    email: "",
    password: "",
  }),
  validationSchema: (props) =>
    Yup.object().shape({
      email: Yup.string().email("Enter valid email").required(),
      name: Yup.string().required("Enter valid name"),
      password: Yup.string().required("Enter valid password"),
    }),
  async handleSubmit(values, { props }) {
    const base_url = "http://localhost:3001/users/register";
    axios
      .post(base_url, values)
      .then((response) => {
        props.register();
        props.history.push("/List");
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  displayName: "BasicForm",
})(BasicTextFields);
export default withRouter(Form);
// export default BasicTextFields;
