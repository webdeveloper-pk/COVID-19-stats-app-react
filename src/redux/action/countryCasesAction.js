import axios from "axios";
import { baseURL } from "../../helper/api";
import {
  FETCH_COUNTRY_CASES_REQUEST,
  FETCH_COUNTRY_CASES_SUCCESS,
  FETCH_COUNTRY_CASES_ERROR,
} from "../contains/actionTypes";

export const fetchCountryCasesRequest = () => {
  return {
    type: FETCH_COUNTRY_CASES_REQUEST,
  };
};

export const fetchCountryCasesSuccess = (data) => {
  return {
    type: FETCH_COUNTRY_CASES_SUCCESS,
    payload: data,
  };
};

export const fetchCountryCasesError = (error) => {
  return {
    type: FETCH_COUNTRY_CASES_ERROR,
    payload: error,
  };
};

export function fetchCountryCases() {
  return function (dispatch) {
    dispatch(fetchCountryCasesRequest());
    axios
      .get(`${baseURL}/countries`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchCountryCasesSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchCountryCasesError(error.message));
      });
  };
}
