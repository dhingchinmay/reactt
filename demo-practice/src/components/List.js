import { useEffect } from "react";
// import { useState } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
import "./List.css";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import { connect } from "react-redux";
import { setList } from "./store/actions/uiActions";
// import React from "react";
// import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SvgIcon from "@material-ui/core/SvgIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./List.css";

// import { Paper } from "@material-ui/core";
// import { display } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 450,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListDividers(props) {
  const classes = useStyles();
  const { setEmployeeList } = props;
  const { employeeList } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  useEffect(function () {
    const fetchData = async () => {
      const url = "http://localhost:3001/users/all";
      const response = await fetch(url);
      const info = await response.json();
      setEmployeeList(info);
      console.log(info);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header></Header>
      {employeeList.length !== 0 &&
        employeeList.map((val, count) => {
          return (
            <div
              style={{
                margin: "2px",
                backgroundColor: "whiteSmoke",
                boxSizing: "border-box",
                borderRadius: "10px",
              }}
            >
              {/* border: "2px black solid" */}
              {/* <div className="list-display"> */}
              <ListItem
                key={count}
                component="nav"
                aria-label="mailbox folders"
              >
                <div style={{ width: "33%" }}>{val.name}</div>
                <div style={{ width: "33%" }}>{val.email}</div>
                <div
                  style={{
                    width: "33%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {/* <Button
                    style={{ margin: "0 10px" }}
                    onClick={handleClickOpen}
                    value="Submit"
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button> */}

                  <div>
                    <EditIcon
                      style={{ margin: "0 30px" }}
                      onClick={handleClickOpen}
                    />
                    {/* <Button
                      style={{ margin: "0 10px" }}
                      value="Submit"
                      variant="contained"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      Edit
                    </Button> */}

                    {/* <DeleteForeverIcon /> */}
                    {/* </Grid> */}
                    <DeleteIcon />
                    {/* <Button
                      onClick={() => {}}
                      value="Submit"
                      variant="contained"
                      color="primary"
                    >
                      Delete
                    </Button> */}

                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">
                        Edit Form
                      </DialogTitle>
                      <DialogContent>
                        {/* <DialogContentText>Edit Fields</DialogContentText> */}
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="Name"
                          type="email"
                          fullWidth
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id="email"
                          label="Email"
                          type="email"
                          fullWidth
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id="password"
                          label="Password"
                          fullWidth
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                          Update
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </ListItem>
            </div>
          );
        })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    employeeList: state.ui.employeeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmployeeList: (data) => dispatch(setList(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListDividers);
