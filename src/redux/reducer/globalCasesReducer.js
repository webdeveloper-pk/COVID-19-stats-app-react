import {
  FETCH_GLOBAL_CASES_REQUEST,
  FETCH_GLOBAL_CASES_SUCCESS,
  FETCH_GLOBAL_CASES_ERROR,
} from "../contains/actionTypes";

const initialState = {
  globalData: {},
  loading: false,
  error: null,
};

const globalCasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GLOBAL_CASES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_GLOBAL_CASES_SUCCESS:
      return {
        ...state,
        loading: false,
        globalData: action.payload,
      };

    case FETCH_GLOBAL_CASES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default globalCasesReducer;
