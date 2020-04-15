// actions
export const url_reference = url => {
  return { type: "URL_REFERENCE", payload: url };
};

// not used
export const navbar_selection_key1 = () => {
  return { type: "KEY1_SELECTED" };
};
export const navbar_selection_key2 = () => {
  return { type: "KEY2_SELECTED" };
};
export const navbar_selection_key3 = () => {
  return { type: "KEY3_SELECTED" };
};
export const increment = data => {
  return { type: "INCREMENT", payload: data }; // payload has the data or parameter we want to pass to the reducer function which will manipulate it
};
export const decrement = () => {
  return { type: "DECREMENT" };
};
