import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/action";

const CountryStatistics = () => {
  const dispatch = useDispatch();
  const countryStats = useSelector(
    (state) => state.countryCasesReducer.countriesData
  );
  console.log(countryStats, "data");

  useEffect(() => {
    dispatch(allActions.fetchCountryCases());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {countryStats?.map((data, ind) => {
        return (
          <div key={ind}>
            Country : {data.country}, Total Cases {data.cases} , Total Deaths
            {data.deaths} , Total Recovered {data.recovered}
          </div>
        );
      })}
    </div>
  );
};

export default CountryStatistics;
