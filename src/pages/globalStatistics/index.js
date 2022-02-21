import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/action";
// import { DatePicker } from "antd";

const GlobalStatistics = () => {
  const dispatch = useDispatch();
  const globalStats = useSelector(
    (state) => state.globalCasesReducer.globalData
  );
  console.log(globalStats, "data");

  useEffect(() => {
    dispatch(allActions.fetchTotalCases());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* {posts &&
        posts.map((data, ind) => {
          return <div key={ind}>{data.name}</div>;
        })} */}
      <h2>Active cases : {globalStats.active}</h2>
      <h2>Total cases : {globalStats.cases}</h2>
      <h2>Total deaths : {globalStats.deaths}</h2>
      <h2>Total recovered : {globalStats.recovered}</h2>
      <hr />
      <h2>Today cases : {globalStats.todayCases}</h2>
      <h2>Today deaths : {globalStats.todayDeaths}</h2>
      <h2>Today recovered : {globalStats.todayRecovered}</h2>
    </div>
  );
};

export default GlobalStatistics;
