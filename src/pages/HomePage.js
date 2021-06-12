import React, { useState, useContext, useMemo, useEffect } from "react";
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
import DialogBox from "../components/DialogBox.js";

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
  const { users, removeUser } = useContext(GlobalContext);
  // const [dialogOpen, setDialogOpen] = useState(0);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState("Deleted");
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const deletedUserName = users.filter((user) => user.id === id)[0];
    setName(deletedUserName?.firstName);
  }, [id]);

  // console.log(users);
  // console.log(dialogOpen);
  // const findNamefun = () => users.filter((user) => user.id === dialogOpen);
  // console.log(`findNamefun`, findNamefun());
  // const findName = findNamefun();
  // console.log("findName", findName[0].firstName);
  // const memoizedValue = useMemo(
  //   () => users[dialogOpen].firstName,
  //   [dialogOpen]
  // );
  // console.log(memoizedValue);

  // const DialogBox = () => (
  //   <Dialog
  //     open={Boolean(dialogOpen)}
  //     onClose={() => setDialogOpen(Boolean(0))}
  //   >
  //     <DialogTitle>{`Are You Sure to Delete ${dialogOpen}`}</DialogTitle>

  //     <DialogActions>
  //       <Button
  //         variant="contained"
  //         color="secondary"
  //         onClick={() => {
  //           setDialogOpen(Boolean(0));
  //           removeUser(dialogOpen);
  //         }}
  //       >
  //         Delete
  //       </Button>
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         onClick={() => setDialogOpen(Boolean(0))}
  //       >
  //         Cancel
  //       </Button>
  //     </DialogActions>
  //   </Dialog>
  // );

  const handleSearch = (e) => {
    console.log(`search`, search);
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      const filterData = users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(search.toLowerCase()) ||
          user.lastName.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase()) ||
          user.selectState.toLowerCase().includes(search.toLowerCase()) ||
          user.city.toLowerCase().includes(search.toLowerCase()) ||
          user.pincode.includes(search)
      );
      setSearchData(filterData);
    }
  }, [search]);
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
            name={search}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </Toolbar>
      <Table
        headerData={header}
        bodyData={search.length > 0 ? searchData : users}
        setOpen={setOpen}
        setId={setId}
      />
      <DialogBox
        title={`Are You Sure to Delete ${name}`}
        open={open}
        setOpen={setOpen}
        action={() => removeUser(id)}
      />
    </div>
  );
};

export default HomePage;
