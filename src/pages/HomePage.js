import React, { useState, useContext } from "react";
import Table from "../components/Table.js";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState.js";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "0 20px",
    // border: "1px solid red",
    flexGrow: 1,
  },
  addButton: {
    borderBottom: "5px solid #1a237e",
  },
  search: {
    marginLeft: "auto",
    border: "1px solid #E8E8E8",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "20ch",
  },
}));
const header = [
  "#",
  "First Name",
  "Last Name",
  "Email",
  "State",
  "City",
  "Pincode",
  "Action",
];
const HomePage = () => {
  const { users } = useContext(GlobalContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  // console.log(dialogOpen);

  const DialogBox = (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogTitle>{"Are You Sure to Delete"}</DialogTitle>

      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          // type="submit"
          // className={classes.button}
        >
          Delete
        </Button>
        <Button variant="contained" color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Toolbar>
        <NavLink exact to={"/addrecord"} style={{ textDecoration: "none" }}>
          <Button startIcon={<AddIcon />} className={classes.addButton}>
            Add record
          </Button>
        </NavLink>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
      <Table
        headerData={header}
        bodyData={users}
        setDialogOpen={setDialogOpen}
      />
      {DialogBox}
    </div>
  );
};

export default HomePage;
