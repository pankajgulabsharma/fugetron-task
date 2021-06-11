const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, payload],
      };
    case "REMOVE_USER":
      break;

    case "EDIT_USER":
      const { id } = payload;
      const updatedUserData = state.user.map((curr, index) =>
        index + 1 === id ? payload.updateduser : curr
      );
      return {
        ...state,
        users: updatedUserData,
      };

    default:
      return state;
  }
};

export default AppReducer;
