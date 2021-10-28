import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
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

export default function BasicTextFields(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const classes = useStyles();

  useEffect(async function () {
    const url = "http://localhost:3001/users/all";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const base_url = "http://localhost:3001/users/register";
    const data = { varName: this.state.varName };
    axios
      .post(base_url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(JSON.stringify(data));

    this.setState({
      submit: this.state.varName,
    });
  };

  // const url = "localhost:3001/api/users/register";
  // const usersData = [];
  // let getData = () => {
  //   axios
  //     .get(url)
  //     .then((res) => usersData.push(res.data))
  //     .catch((err) => console.log(err.data));
  // };

  return (
    <div style={{ textAlign: "center" }}>
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
            padding: "1rem",
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                type="name"
                required
              />
            </div>
            <div style={{ margin: "10px" }}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                type="email"
                required
              />
            </div>
            <div style={{ margin: "10px" }}>
              <TextField label="Password" type="password" required />
            </div>
            <Button
              onClick={handleSubmit}
              value="Submit"
              variant="contained"
              color="primary"
              disableElevation
            >
              Submit
            </Button>
          </form>
        </Typography>
      </Container>
    </div>
  );
}
