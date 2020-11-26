const navbar_selection_reducer = (state = "key1", action) => {
  switch (action.type) {
    case "KEY1_SELECTED":
      state = "key1";
      return state;
    case "KEY2_SELECTED":
      state = "key2";
      return state;
    case "KEY3_SELECTED":
      state = "key3";
      return state;
    case "KEY4_SELECTED":
      state = "key4";
      return state;
    default:
      return state;
  }
};

export default navbar_selection_reducer;
