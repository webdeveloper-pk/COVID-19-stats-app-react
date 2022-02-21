import {
  FETCH_COUNTRY_CASES_REQUEST,
  FETCH_COUNTRY_CASES_SUCCESS,
  FETCH_COUNTRY_CASES_ERROR,
} from "../contains/actionTypes";

const initialState = {
  countriesData: [],
  loading: false,
  error: null,
};

const countryCasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_CASES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COUNTRY_CASES_SUCCESS:
      return {
        ...state,
        loading: false,
        countriesData: action.payload,
      };

    case FETCH_COUNTRY_CASES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countryCasesReducer;
