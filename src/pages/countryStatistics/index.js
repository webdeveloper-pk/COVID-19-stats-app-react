import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/action";
import TopBar from "../../components/topBar";
import TableComponent from "../../components/table";
import "./style.css";

const CountryStatistics = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [sortedInfo, setSortedInfo] = useState(null);

  const dispatch = useDispatch();
  const countryStats = useSelector(
    (state) => state.countryCasesReducer.countriesData
  );

  useEffect(() => {
    dispatch(allActions.fetchCountryCases());
    // eslint-disable-next-line
  }, []);

  const onChangeHandler = (e) => {
    let result = [];
    const value = e.target.value;
    if (value.length >= 1) {
      result = countryStats?.filter((character) => {
        return character.country.toLowerCase().startsWith(value.toLowerCase());
      });
      setFilteredData(result);
    } else {
      setFilteredData(countryStats);
    }
  };

  useEffect(() => {
    if (countryStats.length) setFilteredData(countryStats);
  }, [countryStats]);

  const data = filteredData?.map((item) => {
    return {
      key: item.countryInfo._id,
      Country: item.country,
      Cases: item.cases,
      Active: item.active,
      Death: item.deaths,
      Critical: item.critical,
      Recovered: item.recovered,
    };
  });

  const onSelect = (value) => {
    if (value === "cases") {
      setSortedInfo({
        order: "descend",
        columnKey: "Cases",
      });
    } else if (value === "active") {
      setSortedInfo({
        order: "descend",
        columnKey: "Active",
      });
    } else if (value === "deaths") {
      setSortedInfo({
        order: "descend",
        columnKey: "Death",
      });
    } else if (value === "recovered") {
      setSortedInfo({
        order: "descend",
        columnKey: "Recovered",
      });
    } else {
      setSortedInfo({
        order: "descend",
        columnKey: "Critical",
      });
    }
  };

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Country",
      dataIndex: "Country",
    },
    {
      title: "Cases",
      dataIndex: "Cases",
      key: "Cases",
      sorter: (a, b) => a.Cases - b.Cases,
      sortOrder: sortedInfo?.columnKey === "Cases" && sortedInfo.order,
    },
    {
      title: "Active",
      dataIndex: "Active",
      key: "Active",
      sorter: (a, b) => a.Active - b.Active,
      sortOrder: sortedInfo?.columnKey === "Active" && sortedInfo.order,
    },
    {
      title: "Death",
      dataIndex: "Death",
      key: "Death",
      sorter: (a, b) => a.Death - b.Death,
      sortOrder: sortedInfo?.columnKey === "Death" && sortedInfo.order,
    },
    {
      title: "Critical",
      dataIndex: "Critical",
      key: "Critical",
      sorter: (a, b) => a.Critical - b.Critical,
      sortOrder: sortedInfo?.columnKey === "Critical" && sortedInfo.order,
    },
    {
      title: "Recovered",
      dataIndex: "Recovered",
      key: "Recovered",
      sorter: (a, b) => a.Recovered - b.Recovered,
      sortOrder: sortedInfo?.columnKey === "Recovered" && sortedInfo.order,
    },
  ];

  return (
    <>
      {/* top bar */}
      <TopBar onChangeHandler={onChangeHandler} onSelect={onSelect} />
      {/* table component */}
      <div className="table-responsive">
        <TableComponent
          columns={columns}
          data={data}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default CountryStatistics;
