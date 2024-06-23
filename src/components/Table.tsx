import React from "react";
import { pieRes as data } from "./chart/ApiRes";

interface TableProps {}

interface ActualData {
  [key: string]: {
    [key: string]: number;
  };
}

const actualData: ActualData = data.reportData[0].values;

const Table: React.FC<TableProps> = () => {
  const header = Object.keys(actualData).map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  );
  const months = Object.keys(actualData.marketing);

  return (
    <table className="w-[90%] mx-auto my-4 border-collapse border border-gray-300">
      <thead className="bg-gray-50 border-b border-gray-300">
        <tr>
          <th className="p-4 text-sm font-semibold tracking-wide text-left">
            Month
          </th>
          {header.map((item) => (
            <th
              className="p-4 text-sm font-semibold tracking-wide text-left"
              key={item}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {months.map((month, index) => {
          return (
            <tr
              key={month}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 cursor-pointer`}
            >
              <td className="p-4 text-sm text-gray-700">{month}</td>
              {header.map((headerItem) => (
                <td
                  className="p-4 text-sm text-gray-700"
                  key={`${month}-${headerItem}`}
                >
                  {actualData[headerItem.toLowerCase()][month]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
