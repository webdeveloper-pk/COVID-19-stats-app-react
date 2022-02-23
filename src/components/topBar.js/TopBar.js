import React from "react";
import { Input, Select } from "antd";
import "./style.css";

const { Option } = Select;

const TopBar = ({ onChangeHandler }) => {
  const onSelect = (value) => {
    console.log(value);
  };

  return (
    <div className="top-wrapper">
      <div className="select-wrapper">
        <div>Sort By : </div>
        <Select
          defaultValue="Active"
          onChange={onSelect}
          className="selectCustom"
        >
          <Option value="active">Active</Option>
          <Option value="deaths">Deaths</Option>
          <Option value="recovered">Recovered</Option>
        </Select>
      </div>
      <div className="search-wrapper">
        <div className="search-text">Search By :</div>
        <Input
          placeholder="Countries"
          size="middle"
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default TopBar;
