import React from "react";
import { Table } from "ant-table-extensions";

const TableComponent = ({ columns, data, handleChange }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      key={data.key}
      exportable
      onChange={handleChange}
    />
  );
};

export default TableComponent;
