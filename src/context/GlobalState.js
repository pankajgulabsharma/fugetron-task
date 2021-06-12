import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   selectState: "",
//   city: "",
//   pincode: "",
// };

const initialState = {
  users: [
    {
      id: 1,
      firstName: "firstName1",
      lastName: "lastName1",
      email: "email1@gmail.com",
      selectState: "Maharashtra",
      city: "city1",
      pincode: 11111,
    },
    {
      id: 2,
      firstName: "firstName2",
      lastName: "lastName2",
      email: "rtrow7@businesswire.com",
      selectState: "Goa",
      city: "city2",
      pincode: 22222,
    },
    {
      id: 3,
      firstName: "Ardisj",
      lastName: "Boays",
      email: "omcpaike6@yelp.com",
      selectState: "Maharashtra",
      city: "city3",
      pincode: 3333,
    },
    {
      id: 4,
      firstName: "Oralla",
      lastName: "McPaike",
      email: "aboays5@msn.com",
      selectState: "Goa",
      city: "city4",
      pincode: 44444,
    },
  ],
};
export const GlobalContext = createContext(initialState);
const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); //now state become initialState

  //Add user
  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  };

  //Delete user
  const removeUser = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };

  //edit user
  const editUser = (updateduser) => {
    dispatch({ type: "EDIT_USER", payload: updateduser });
  };
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        addUser: addUser,
        removeUser: removeUser,
        editUser: editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
