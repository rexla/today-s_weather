import React from "react";
import History from "./History";
import { v4 } from "uuid";

const HistoryList = ({ searchHistory }) => {
  if (searchHistory.length === 0)
    return (
      <div className="flex justify-center items-center mt-24 text-[#FAF089] text-2xl font-medium">
        No Record
      </div>
    );
  return (
    <>
      {searchHistory.map((item, index) => {
        return (
          <History
            key={v4()}
            city={item.city}
            country={item.country}
            time={item.time}
            number={index + 1}
            id={item.id}
          />
        );
      })}
    </>
  );
};

export default HistoryList;
