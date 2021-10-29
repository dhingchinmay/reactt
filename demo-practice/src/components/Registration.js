import React, { useEffect } from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
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
  const classes = useStyles();

  useEffect(async function () {
    const url = "http://localhost:3001/users/all";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const base_url = "http://localhost:3001/users/register";
    axios
      .post(base_url, formik.values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    // console.log(JSON.stringify(data));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: "rgb(208, 214, 218)",
            height: "330px",
            padding: "15%",
            margin: "2rem auto",
            width: "350px",
            color: "black",
          }}
        >
          <h1 style={{ color: "Black", fontFamily: "sans-serif" }}>
            Registration
          </h1>
          <form
            // className={classes.root}
            className={classes.center}
            autoComplete="off"
          >
            <div>
              <TextField
                // id="name"
                label="Name"
                name="name"
                variant="outlined"
                margin="dense"
                onChange={formik.handleChange}
                value={formik.values.name}
                required
              />
            </div>
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
              Register
            </Button>
          </form>
        </Typography>
      </Container>
    </div>
  );
  // return <div>gg</div>;
};
export default BasicTextFields;
