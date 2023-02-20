import React from "react";
import History from "./History";
import { v4 } from "uuid";
import { NoRecord } from "./template/NoRecord";

const HistoryList = ({
  searchHistory,
  onDelete,
  onDisplay,
  onUpdate,
  OnDecrement,
}) => {
  if (searchHistory.length === 0) return <NoRecord />;
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
            searchHistory={searchHistory}
            onDelete={onDelete}
            onDisplay={onDisplay}
            onUpdate={onUpdate}
            OnDecrement={OnDecrement}
          />
        );
      })}
    </>
  );
};

export default HistoryList;
