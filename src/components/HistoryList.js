import React from "react";
import History from "./History";

const HistoryList = ({ searchHistory, weatherData, cityCountry }) => {
  console.log(searchHistory);
  return (
    <>
      {searchHistory.map((item) => {
        return <p>{item.time}</p>;
      })}
    </>
  );
};

export default HistoryList;
