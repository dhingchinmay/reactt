import { useEffect } from "react";
// import { useState } from "react";
import React from "react";
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
      <Button
        value="Submit"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Add User
      </Button>
      {employeeList.length !== 0 &&
        employeeList.map((val, count) => {
          return (
            <div className="list-display">
              <ListItem
                key={count}
                // style={{ margin: "2px", border: "2px blue solid" }}
                component="nav"
                aria-label="mailbox folders"
              >
                {/* <li style={{ padding: "1px" }}></li>   */}
                <div style={{ width: "33%" }}>{val.name}</div>
                {/* <li style={{ padding: "1px" }}>{val.email}</li> */}

                <div style={{ width: "33%" }}>{val.email}</div>

                {/* <Button
                  style={{ display: "flex", justifyContent: "right" }}
                  onClick={() => {}}
                  value="Submit"
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button> */}
                <div
                  style={{
                    width: "33%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    style={{ margin: "0 10px" }}
                    onClick={() => {}}
                    value="Submit"
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {}}
                    value="Submit"
                    variant="contained"
                    color="primary"
                  >
                    Delete
                  </Button>
                </div>
              </ListItem>
            </div>
          );
        })}
    </>
  );
  // (
  //
  // )
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
