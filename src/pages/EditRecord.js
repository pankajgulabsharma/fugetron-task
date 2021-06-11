import React, { useState } from "react";
import TextField from "../components/TextField";
import Select from "../components/Select";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  const [state, setState] = useState(initialState);
  const [error, setError] = useState({});
  let history = useHistory();
  // console.log(state);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      console.log("sucess");
      // alert(JSON.stringify(state));
      // await axios.post(
      //   "https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch",
      //   state
      // );
      history.push("/");
    }
  };

  //function for email validation returns boolean
  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validation = () => {
    let temp = {};
    console.log("hi");

    //pincode validation
    temp.pincode =
      state.pincode.trim() === ""
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
