import React from "react";
import { GoSearch } from "react-icons/go";
import { TbTrash } from "react-icons/tb";

const History = ({
  city,
  country,
  time,
  number,
  id,
  searchHistory,
  onDelete,
  onDisplay,
  onUpdate,
  OnDecrement,
}) => {
  const deleteItem = () => {
    onUpdate(searchHistory.filter((item) => item.id !== id));
    onDisplay(-1);
    OnDecrement();
  };
  const searchItem = (id) => {
    onDisplay(id);
    onDelete();
  };
  return (
    <div className="flex justify-between items-center text-white border-b-[1px] text-lg py-4 font-semibold">
      <p>
        {number}. {city}, {country}
      </p>
      <div className="flex items-center">
        <p>{time}</p>
        <div
          className="bg-white rounded-full p-1 mx-2 cursor-pointer"
          onClick={() => searchItem(id)}
        >
          <GoSearch style={{ color: "#4299e1" }} />
        </div>
        <div
          className="bg-white rounded-full p-1 cursor-pointer"
          onClick={() => deleteItem()}
        >
          <TbTrash style={{ color: "#4299e1" }} />
        </div>
      </div>
    </div>
  );
};

export default History;
