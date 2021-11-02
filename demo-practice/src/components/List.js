import { useEffect } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import "./List.css";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import { connect } from "react-redux";
import { setList } from "./store/actions/uiActions";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./List.css";
// import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Container } from "@material-ui/core";
import Form from "./Adduser";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "450%",
    // backgroundColor: theme.palette.background.paper,
  },
}));

function ListDividers(props) {
  const classes = useStyles();
  const { setEmployeeList } = props;
  const { employeeList } = props;

  const [open, setOpen] = React.useState({
    dialogOpen: false,
    editUserData: {},
  });

  const handleClickOpen = (val) => () => {
    // setOpen(true);
    setOpen({
      ...open,
      dialogOpen: true,
      editUserData: val,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const handleRemove = (id) => () => {
    // const id = this.state.id;
    const url = `http://localhost:3001/users/${id}`;
    // e.preventDefault();
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => () => {
    // const id = this.state.id;
    const url = `http://localhost:3001/users/${id}`;
    // e.preventDefault();
    axios
      .put(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleEdit = (id) => () => {
  //   // const id = this.state.id;
  //   const url = `http://localhost:3001/users/${id}`;
  //   // e.preventDefault();
  //   axios
  //     .patch(url)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <>
      <Header></Header>
      <div>
        <div
          style={{
            padding: "2px",
            margin: "5px",
            // border: "5px solid ",
            borderStyle: "groove",
          }}
        >
          {employeeList.length !== 0 &&
            employeeList.map((val, count) => {
              return (
                <div
                  className={classes.root}
                  style={{
                    margin: "4px",
                    backgroundColor: "white",
                    // boxSizing: "border-box",
                    // borderRadius: "5px",
                    boxShadow: "1px 1px 2px black",
                    fontFamily: "sans-serif",
                    width: "99%",
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
                          onClick={handleClickOpen(val)}
                          // onClick={handleRemove(val._id)}
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
                        <DeleteIcon onClick={handleRemove(val._id)} />
                        {/* <Button
                      onClick={() => {}}
                      value="Submit"
                      variant="contained"
                      color="primary"
                    >
                      Delete
                    </Button> */}

                        <Dialog
                          open={open.dialogOpen}
                          onClose={handleClose}
                          aria-labelledby="form-dialog-title"
                        >
                          <DialogTitle id="form-dialog-title">
                            Edit Form
                          </DialogTitle>
                          <DialogContent>
                            {/* <DialogContentText>Edit Fields</DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Name"
                              type="email"
                              fullWidth
                              value={open.editUserData?.name}
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="email"
                              label="Email"
                              type="email"
                              fullWidth
                              value={open.editUserData?.email}
                            /> */}
                            {<Form open={open.dialogOpen} editUserData={val} />}
                          </DialogContent>
                          {/* <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              Cancel
                            </Button>
                            <Button
                              onClick={handleEdit(open.editUserData._id)}
                              color="primary"
                            >
                              Update
                            </Button>
                          </DialogActions> */}
                        </Dialog>
                      </div>
                    </div>
                  </ListItem>
                </div>
              );
            })}
        </div>
      </div>
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
