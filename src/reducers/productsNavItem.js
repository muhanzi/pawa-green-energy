const productsNavItemReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW":
      return false; //  hidden --> false // means it is shown
    case "HIDE":
      return true; //  hidden --> true // means it is hidden
    default:
      return state;
  }
};

export default productsNavItemReducer;
