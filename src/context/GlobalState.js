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
      firstName: "firstName1",
      lastName: "lastName1",
      email: "email1",
      selectState: "selectState1",
      city: "city1",
      pincode: "pincode1",
    },
    {
      firstName: "firstName2",
      lastName: "lastName2",
      email: "email2",
      selectState: "selectState2",
      city: "city2",
      pincode: "pincode2",
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
  const editUser = (updateduser, id) => {
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
