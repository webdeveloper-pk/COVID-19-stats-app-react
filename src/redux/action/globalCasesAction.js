import axios from "axios";
import { baseURL } from "../../helper/api";
import {
  FETCH_GLOBAL_CASES_REQUEST,
  FETCH_GLOBAL_CASES_SUCCESS,
  FETCH_GLOBAL_CASES_ERROR,
} from "../contains/actionTypes";

export const fetchTotalCasesRequest = () => {
  return {
    type: FETCH_GLOBAL_CASES_REQUEST,
  };
};

export const fetchTotalCasesSuccess = (data) => {
  return {
    type: FETCH_GLOBAL_CASES_SUCCESS,
    payload: data,
  };
};

export const fetchTotalCasesError = (error) => {
  return {
    type: FETCH_GLOBAL_CASES_ERROR,
    payload: error,
  };
};

export function fetchTotalCases() {
  return function (dispatch) {
    dispatch(fetchTotalCasesRequest());
    axios
      .get(`${baseURL}/all`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchTotalCasesSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchTotalCasesError(error.message));
      });
  };
}
