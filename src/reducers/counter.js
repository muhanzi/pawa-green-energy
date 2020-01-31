const counterReducer = (state = 0, action) => {
  //state=0 // the initial value of the state is set to 0 // but it can be anything eg. {},[],"",...
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
