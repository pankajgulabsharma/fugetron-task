import {
  TableCell,
  TableContainer,
  Table as TableBase,
  TableHead,
  TableRow,
  TableBody,
  Button,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    backgroundColor: "#1a237e",
    color: "#fff",
    textAlign: "center",
  },
  body: {
    textAlign: "center",
  },
  button: {
    marginLeft: "10px",
  },
});
const Table = ({ headerData, bodyData, setDialogOpen }) => {
  const classes = useStyle();
  return (
    <TableContainer>
      <TableBase>
        <TableHead>
          <TableRow>
            {headerData.map((headerName, index) => (
              <TableCell key={index} className={classes.header}>
                {headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyData.map(
            (
              { firstName, lastName, email, selectState, city, pincode },
              index
            ) => (
              <TableRow key={index}>
                <TableCell className={classes.body}>{index + 1}</TableCell>
                <TableCell className={classes.body}>{firstName}</TableCell>
                <TableCell className={classes.body}>{lastName}</TableCell>
                <TableCell className={classes.body}>{email}</TableCell>
                <TableCell className={classes.body}>{selectState}</TableCell>
                <TableCell className={classes.body}>{city}</TableCell>
                <TableCell className={classes.body}>{pincode}</TableCell>
                <TableCell className={classes.body}>
                  <NavLink
                    exact
                    to={`/editrecord/${index + 1}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      EDIT
                    </Button>
                  </NavLink>

                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={() => setDialogOpen(true)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </TableBase>
    </TableContainer>
  );
};

export default Table;
