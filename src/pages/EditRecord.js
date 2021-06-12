import React, { useContext, useEffect, useState } from "react";
import TextField from "../components/TextField";
import Select from "../components/Select";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "0 20px",
    // border: "1px solid red",
  },
  form: {
    // border: "1px solid red",
  },
  gridItems: {
    "&>*": {
      marginLeft: theme.spacing(1),
      // width: "25ch",
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginLeft: "10px",
  },
}));

const selectArr = ["Maharashtra", "Goa", "Gujrat", "Delhi"];
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  selectState: "",
  city: "",
  pincode: "",
};
const EditRecord = () => {
  const { users, editUser } = useContext(GlobalContext);
  const [state, setState] = useState(initialState);
  const [error, setError] = useState({});
  let history = useHistory();
  const { id } = useParams();
  // console.log(state);

  useEffect(() => {
    console.log(`users`, users);
    const selectedUser = users.find((user, index) => user.id === parseInt(id));
    setState(selectedUser);
    console.log("selectdUser", id, selectedUser);
  }, [id]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      // console.log("Edit id",id);
      // console.log("Edit state",state);
      editUser(state);
      console.log("sucess");
      history.push("/");
    }
  };

  const validation = () => {
    let temp = {};

    //pincode validation
    temp.pincode =
      state.pincode === ""
        ? "Pincode is required"
        : state.pincode.length < 6
        ? ""
        : "pincode can not be more than 5 digit";

    setError(temp);
    return Object.values(temp).every((x) => x === "");
  };

  //useStyle
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.gridItems}>
            <TextField
              label="First Name"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              disabled={true}
              label="Email"
              name="email"
              value={state.email}
              onChange={handleChange}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItems}>
            <Select
              label="State"
              name="selectState"
              value={state.selectState}
              onChange={handleChange}
              variant="outlined"
              menuData={selectArr}
            />
            <TextField
              label="City"
              name="city"
              value={state.city}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="Pincode"
              name="pincode"
              type="number"
              value={state.pincode}
              onChange={handleChange}
              variant="outlined"
              error={error.pincode}
            />
          </Grid>
          <Grid item xs={12} className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Update
            </Button>
            <NavLink exact to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Cancel
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditRecord;
