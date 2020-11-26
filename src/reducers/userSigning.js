const userSigningReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNED_IN":
      state = action.payload;
      return state;
    case "SIGNED_OUT":
      state = {};
      return state;
    default:
      return state;
  }
};

export default userSigningReducer;
