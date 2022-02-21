import { combineReducers } from "redux";
import casesReducer from "./casesReducer";

const rootReducer = combineReducers({
  casesReducer,
});

export default rootReducer;
