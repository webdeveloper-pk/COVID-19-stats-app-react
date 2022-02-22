import React from "react";
import { Input, Select } from "antd";
import "./style.css";

const { Option } = Select;

const TopBar = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="top-wrapper">
      <div className="select-wrapper">
        <div>Sort By : </div>
        <Select
          defaultValue="lucy"
          onChange={handleChange}
          className="selectCustom"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
      <div className="search-wrapper">
        <div className="search-text">Search By :</div>
        <Input placeholder="Search" size="middle" />
      </div>
    </div>
  );
};

export default TopBar;
