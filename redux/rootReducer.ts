import { combineReducers } from "redux";
import reducer from "./Todo/reducer";

export default combineReducers({
  todos: reducer
})