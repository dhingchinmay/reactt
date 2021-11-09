import * as Yup from "yup";
import React from "react";
// import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withFormik } from "formik";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { addemployee } from "./store/actions/uiActions";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
// import DialogContentText from "@material-ui/core/DialogContentText";
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
    onClose,
  } = props;
  const { addemployee } = props;
  // console.log("props of form", props);
  // const [openG, setOpen] = React.useState(false);

  // useEffect(function () {
  //   addemployee();
  // }, []);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    onClose();
  };

  // const handleEdit = (id) => () => {
  //   // const id = this.state.id;
  //   const url = `http://localhost:3001/employee/${id}`;
  //   // e.preventDefault();
  //   axios
  //     .put(url)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              error
              id="name"
              label="Name"
              name="name"
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
              error
              id="email"
              label="Email"
              name="email"
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
            {/* <TextField
              error
              id="password"
              label="Password"
              type="password"
              requiredlabel="Password"
              type="password"
              value={values.password}
              onBlur={handleBlur}
              error={!!touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              variant="outlined"
              margin="dense"
              onChange={handleChange}
              fullWidth
            /> */}
            <TextField
              error
              id="phone"
              label="Phone"
              type="phone"
              value={values.phone}
              onBlur={handleBlur}
              error={!!touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
              variant="outlined"
              margin="dense"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              error
              id="gender"
              label="gender"
              type="gender"
              value={values.gender}
              onBlur={handleBlur}
              error={!!touched.gender && !!errors.gender}
              helperText={touched.gender && errors.gender}
              variant="outlined"
              margin="dense"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              error
              id="dob"
              label="DOB"
              type="dob"
              requiredlabel="dob"
              type="dob"
              value={values.dob}
              onBlur={handleBlur}
              error={!!touched.dob && !!errors.dob}
              helperText={touched.dob && errors.dob}
              variant="outlined"
              margin="dense"
              onChange={handleChange}
              fullWidth
            />
            <FormControl component="fieldset">
              {/* <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
                value={values.gender}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup> */}
              <Button color="secondary" variant="contained" type="submit">
                Submit
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </FormControl>
          </form>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button> 
           <Button color="primary" type="submit">
            Add
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

const Form = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    name: props.editUserData?.name ? props.editUserData?.name : "",
    email: props.editUserData?.email ? props.editUserData?.email : "",
    phone: props.editUserData?.phone ? props.editUserData?.phone : "",
    dob: props.editUserData?.dob ? props.editUserData?.dob : "",
    gender: props.editUserData?.gender ? props.editUserData?.gender : "",
  }),

  validationSchema: (props) =>
    Yup.object().shape({
      name: Yup.string().required("Enter valid name"),
      email: Yup.string().email("Enter valid email").required(),
      // password: Yup.string().required("Enter valid password"),
      phone: Yup.string()
        .required("This field is Required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        ),
    }),

  async handleSubmit(values, { props }) {
    // console.log("going to submit", props);
    //   const base_url = "http://localhost:3001/employee";
    //   if (props.editUserData) {
    //     // edit user
    //     axios
    //       .put(
    //         base_url,
    //         { data: values },
    //         {
    //           params: {
    //             id: props.editUserData._id,
    //           },
    //         }
    //       )
    //       .then((resp) => console.log("Response ", resp));
    //   } else {
    //     axios
    //       .post(base_url + "/add", values)
    //       .then((response) => {
    //         let token = response.data.token;
    //         localStorage.setItem("token", token);
    //         console.log(response);
    //
    //       })
    //       .catch((error) => {
    //         console.log(error.response);
    //       });
    //   }
    console.log("values", values);
    props.addemployee(values);
    props.history.push("/List");
  },
  displayName: "BasicForm",
})(FormDialog);

const mapStateToProps = (state) => {
  return {
    employeeList: state.ui.employeeList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addemployee,
    },
    dispatch
  );
  // return {
  //   setEmployeeList: (data) => dispatch(login(data)),
  // };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
