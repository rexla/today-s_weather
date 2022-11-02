import React from "react";
import { NotFound } from "./template/NotFound";

const WeatherInfo = ({ searchHistory, weatherContentById, notFoundDiv }) => {
  const weatherArray = searchHistory.find(
    (item) => item.id === weatherContentById
  );
  if (notFoundDiv) {
    return <NotFound />;
  } else if (searchHistory.length === 0 || weatherContentById === -1)
    return <div className="h-20"></div>;
  return (
    <div className="p-6">
      <p className="text-[#FAF089] font-medium">{`${weatherArray.city}, ${weatherArray.country}`}</p>
      <p className="text-white text-4xl font-bold">{weatherArray.main}</p>
      <div className="flex mt-2">
        <div className="mr-4 text-[#FAF089] font-medium">
          <p>Description:</p>
          <p>Temperature:</p>
          <p>Humidity:</p>
          <p>Time:</p>
        </div>
        <div className="text-white font-medium">
          <p>{weatherArray.description}</p>
          <p>
            {weatherArray.temperature.temp_min}&#8451; ~{" "}
            {weatherArray.temperature.temp_max}
            &#8451;
          </p>
          <p>{weatherArray.temperature.humidity}%</p>
          <p>
            {`
            ${weatherArray.time.split(" ")[0]}
            ${weatherArray.time.split("午")[1].split(":")[0]}:${
              weatherArray.time.split("午")[1].split(":")[1]
            }
            ${weatherArray.time.split(" ")[1][0] === "上" ? "AM" : "PM"}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
