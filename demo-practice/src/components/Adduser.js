import * as Yup from "yup";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withFormik, Formik } from "formik";
const axios = require("axios");

const FormDialog = (props) => {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    open,
  } = props;

  const [openG, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add User
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add User</DialogTitle>
        <DialogContent>
          <TextField
            error
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            value={values.name}
            onBlur={handleBlur}
            error={!!touched.name && !!errors.name}
            helperText={touched.name && errors.name}
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="email"
            name="email"
            margin="dense"
            id="name"
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
            fullWidth
          />
          <TextField
            id="password"
            margin="dense"
            label="Password"
            type="email"
            value={values.password}
            onBlur={handleBlur}
            error={!!touched.password && !!errors.password}
            helperText={touched.password && errors.password}
            // error={formik.errors.email}
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const Form = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    name: props.editUserData?.name ? props.editUserData?.name : "",
    email: "",
    password: "",
  }),
  validationSchema: (props) =>
    Yup.object().shape({
      name: Yup.string().required("Enter valid name"),
      email: Yup.string().email("Enter valid email").required(),
      password: Yup.string().required("Enter valid password"),
    }),
  async handleSubmit(values, { props }) {
    console.log("props", props);
    const base_url = "http://localhost:3001/employee/add";
    axios
      .post(base_url, values)
      .then((response) => {
        let token = response.data.token;
        localStorage.setItem("token", token);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  displayName: "BasicForm",
})(FormDialog);

export default Form;
