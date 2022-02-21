import {
  FETCH_CASES_REQUEST,
  FETCH_CASES_SUCCESS,
  FETCH_CASES_ERROR,
} from "../contains/actionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const casesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CASES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CASES_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case FETCH_CASES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default casesReducer;
