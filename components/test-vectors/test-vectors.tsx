import React, { useState } from "react";

type TableProps = {
  data: {
    [key: string]: any;
  }[];
};

const Table = ({ data }: TableProps) => {
  const [tableData, setTableData] = useState(data);

  const renderTableData = () => {
    return tableData.map((row, index) => {
      const tableCells = Object.keys(row).map((key) => (
        <td key={key}>{row[key]}</td>
      ));
      return <tr key={index}>{tableCells}</tr>;
    });
  };

  const renderTableHeader = () => {
    const header = Object.keys(data[0]).map((key, index) => (
      <th key={index}>{key.toUpperCase()}</th>
    ));
    return <tr>{header}</tr>;
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default Table;