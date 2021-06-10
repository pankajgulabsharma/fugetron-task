import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  notfound: {
    position: "fixed",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    top: 0,
    width: "100vw",
    height: "100vh",
    alignItems: "center",
  },
}));
const NotFound = () => {
  const classes = useStyle();

  return (
    <div className={classes.notfound}>
      <Typography variant="h3">Page Not Found</Typography>
    </div>
  );
};

export default NotFound;
