import React from "react";

const WeatherInfo = ({ weatherData, cityCountry, searchHistory }) => {
  if (!weatherData) return <div className="h-20 bg-[pink]"></div>;
  return (
    <div className="p-6">
      <p className="text-[#FAF089] font-medium">{`${cityCountry[0].city}, ${cityCountry[0].country}`}</p>
      <p className="text-white text-4xl font-bold">
        {weatherData.weather[0].main}
      </p>
      <div className="flex mt-2">
        <div className="mr-4 text-[#FAF089] font-medium">
          <p>Description:</p>
          <p>Temperature:</p>
          <p>Humidity:</p>
          <p>Time:</p>
        </div>
        <div className="text-white font-medium">
          <p>{weatherData.weather[0].description}</p>
          <p>
            {weatherData.main.temp_min}&#8451; ~ {weatherData.main.temp_max}
            &#8451;
          </p>
          <p>{weatherData.main.humidity}%</p>
          <p>
            {`
            ${new Date().toLocaleString(weatherData.timezone).split(" ")[0]}
            ${
              new Date()
                .toLocaleString(weatherData.timezone)
                .split("午")[1]
                .split(":")[0]
            }:${
              new Date()
                .toLocaleString(weatherData.timezone)
                .split("午")[1]
                .split(":")[1]
            }
            ${
              new Date()
                .toLocaleString(weatherData.timezone)
                .split(" ")[1][0] === "上"
                ? "AM"
                : "PM"
            }`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
