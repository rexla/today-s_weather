import React from "react";
import { GoSearch } from "react-icons/go";
import { TbTrash } from "react-icons/tb";
import { publish } from "../customEvents/event";

const History = ({ city, country, time, number, id }) => {
  const hideNotFoundDiv = () => {
    publish("hideNotFoundDiv");
  };
  const filterSearchHistory = (id) => {
    publish("filterSearchHistory", { id });
  };
  const hideWeatherContentById = () => {
    publish("hideWeatherContentById");
  };
  const showWeatherContentById = (id) => {
    publish("showWeatherContentById", { id });
  };

  const deleteItem = (id) => {
    hideWeatherContentById();
    filterSearchHistory(id);
  };

  const searchItem = (id) => {
    showWeatherContentById(id);
    hideNotFoundDiv();
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
          onClick={() => deleteItem(id)}
        >
          <TbTrash style={{ color: "#4299e1" }} />
        </div>
      </div>
    </div>
  );
};

export default History;
