const urlSourceReducer = (state = "", action) => {
  switch (action.type) {
    case "URL_REFERENCE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default urlSourceReducer;
