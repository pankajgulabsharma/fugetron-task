import { Toolbar, Typography, AppBar as AppBarBase } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  title: {
    flexGrow: 1,
  },
  background: {
    borderBottom: "1px solid #D1D1D1",
    marginBottom: "20px",
  },
});
const AppBar = () => {
  const classes = useStyle();
  return (
    <Toolbar className={classes.background}>
      <Typography variant="h6" className={classes.title}>
        Task
      </Typography>
      <Typography>Home</Typography>
    </Toolbar>
  );
};

export default AppBar;
