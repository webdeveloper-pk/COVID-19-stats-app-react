import axios from "axios";
import { baseURL } from "../../helper/api";
import {
  FETCH_CASES_REQUEST,
  FETCH_CASES_SUCCESS,
  FETCH_CASES_ERROR,
} from "../contains/actionTypes";

export const fetchCaseRequest = () => {
  return {
    type: FETCH_CASES_REQUEST,
  };
};

export const fetchCaseSuccess = (posts) => {
  return {
    type: FETCH_CASES_SUCCESS,
    payload: posts,
  };
};

export const fetchCaseError = (error) => {
  return {
    type: FETCH_CASES_ERROR,
    payload: error,
  };
};

export function fetchCases() {
  return function (dispatch) {
    dispatch(fetchCaseRequest());
    axios
      .get(`${baseURL}/users`)
      .then((response) => {
        const posts = response.data;
        dispatch(fetchCaseSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchCaseError(error.message));
      });
  };
}
