import React, { createContext } from "react";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   selectState: "",
//   city: "",
//   pincode: "",
// };

const initialState = {
  users: [],
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
  const editUser = (user) => {
    dispatch({ type: "EDIT_USER", payload: user });
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
