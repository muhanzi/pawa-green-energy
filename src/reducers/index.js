import { combineReducers } from "redux";
import counterReducer from "./counter";
import navbar_selection_reducer from "./navbar";
import urlSourceReducer from "./urlSource";
import addUserModalReducer from "./addUserModal";

// root reducer // it combines all reducers into one
const allReducers = combineReducers({
  counter: counterReducer,
  navbar: navbar_selection_reducer,
  url: urlSourceReducer,
  addUserModal: addUserModalReducer,
});

export default allReducers;
