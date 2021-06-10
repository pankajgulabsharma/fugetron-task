import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table.js";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Button, InputBase, Toolbar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";

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
  const [getData, setGetData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch"
      );
      // console.log(data.data);
      setGetData(data.data);
    } catch (error) {
      console.log("Error :", error.response.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <Table headerData={header} bodyData={getData} />
    </div>
  );
};

export default HomePage;
