import { combineReducers } from "redux";
import globalCasesReducer from "./globalCasesReducer";
import countryCasesReducer from "./countryCasesReducer";

const rootReducer = combineReducers({
  globalCasesReducer,
  countryCasesReducer,
});

export default rootReducer;
