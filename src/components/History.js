import React from "react";

const History = ({ searchHistory, weatherData, cityCountry }) => {
  if (!weatherData) return;
  return (
    <div>
      {new Date().toLocaleString(weatherData.timezone)} {cityCountry[0].city}{" "}
      {cityCountry[0].country}
    </div>
  );
};

export default History;
