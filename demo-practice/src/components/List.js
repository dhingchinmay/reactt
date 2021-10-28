import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "./List.css";
import Button from "@material-ui/core/Button";
// import { display } from "@mui/system";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function ListDividers() {
  // const classes = useStyles();

  return (
    <List component="nav" aria-label="mailbox folders">
      <Button style={{ margin: "10px" }} variant="contained" color="primary">
        ADD USER
      </Button>

      <div className="list-display">
        <ListItem button>
          <ListItemText primary="Inbox" />
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
          >
            EDIT
          </Button>
          <Button variant="contained" color="primary">
            DELETE
          </Button>
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
          >
            EDIT
          </Button>
          <Button variant="contained" color="primary">
            DELETE
          </Button>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
          >
            EDIT
          </Button>
          <Button variant="contained" color="primary">
            DELETE
          </Button>
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
          >
            EDIT
          </Button>
          <Button variant="contained" color="primary">
            DELETE
          </Button>
        </ListItem>{" "}
      </div>
    </List>
  );
}
