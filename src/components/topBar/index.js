import React from "react";
import { Input, Select } from "antd";
import "./style.css";

const { Option } = Select;

const TopBar = ({ onChangeHandler, onSelect }) => {
  return (
    <div className="top-wrapper">
      <div className="select-wrapper">
        <div>Sort By : </div>
        <Select
          defaultValue="Cases"
          onChange={onSelect}
          className="select-custom"
        >
          <Option value="cases" className="menu-custom">
            Cases
          </Option>
          <Option value="active" className="menu-custom">
            Active
          </Option>
          <Option value="deaths" className="menu-custom">
            Deaths
          </Option>
          <Option value="critical" className="menu-custom">
            Critical
          </Option>
          <Option value="recovered" className="menu-custom">
            Recovered
          </Option>
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
