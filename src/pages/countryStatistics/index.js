import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/action";
import { Table } from "antd";
import TopBar from "../../components/topBar.js/TopBar";
import "./style.css";

const columns = [
  {
    title: "Ranking",
    dataIndex: "Ranking",
    // sorter: {
    //   compare: (a, b) => a.Ranking - b.Ranking,
    //   multiple: 1,
    // },
  },
  {
    title: "Country",
    dataIndex: "Country",
  },
  {
    title: "Cases",
    dataIndex: "Cases",
  },
  {
    title: "Active",
    dataIndex: "Active",
  },
  {
    title: "Death",
    dataIndex: "Death",
  },
  {
    title: "Critical",
    dataIndex: "Critical",
  },
  {
    title: "Recovered",
    dataIndex: "Recovered",
  },
];

const CountryStatistics = () => {
  const dispatch = useDispatch();
  const countryStats = useSelector(
    (state) => state.countryCasesReducer.countriesData
  );
  console.log(countryStats, "countryStats");

  useEffect(() => {
    dispatch(allActions.fetchCountryCases());
    // eslint-disable-next-line
  }, []);

  const data = countryStats.map((item) => {
    return {
      key: item.countryInfo._id,
      Ranking: item.countryInfo._id,
      Country: item.country,
      Cases: item.cases,
      Active: item.active,
      Death: item.deaths,
      Critical: item.critical,
      Recovered: item.recovered,
    };
  });

  return (
    <>
      {/* top bar */}
      <TopBar />
      <div className="table-responsive">
        {/* table component */}
        <Table columns={columns} dataSource={data} key={data.key} />
      </div>
    </>
  );
};

export default CountryStatistics;
