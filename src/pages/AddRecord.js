import React, { useState } from "react";
import TextField from "../components/TextField";
import Select from "../components/Select";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    // padding: "0 750px 0 20px",
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
const AddRecord = () => {
  const [state, setState] = useState("");
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.gridItems}>
            <TextField label="First Name" variant="outlined" />
            <TextField label="Last Name" variant="outlined" />
            <TextField label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12} className={classes.gridItems}>
            <Select
              label="State"
              variant="outlined"
              menuData={selectArr}
              value={state}
            />
            <TextField label="City" variant="outlined" />
            <TextField label="Pincode" variant="outlined" />
          </Grid>
          <Grid item xs={12} className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddRecord;
