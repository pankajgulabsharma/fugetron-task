const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      console.log("Add state",state);
      return {
        ...state,
        users: [...state.users, {id:state.users.length+1,...payload}],
      };
    case "REMOVE_USER":
      const filteredData=state.users.filter(user=>user.id!==payload)
      return {
        ...state,
        users:filteredData
      }

    case "EDIT_USER":
    const allUpdated=state.users.map(user=>user.id===payload.id ? payload :user) 
      return {
        ...state,
        users: allUpdated,
      };

    default:
      return state;
  }
};

export default AppReducer;
