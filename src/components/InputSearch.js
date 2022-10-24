import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import city_list from "../json/city_list.json";
import key from "../json/key.json";
import { publish } from "../customEvents/event";

const InputSearch = ({ onNotFound, onDelete, onHideWeatherContent }) => {
  const { register, handleSubmit, reset } = useForm();

  const addSearchHistory = (data, city, country) => {
    publish("addSearchHistory", { data, city, country });
  };

  const onSubmit = (data) => {
    let city = city_list.find((item) => item.name === data.city);
    let country = city_list.find((item) => item.country === data.country);
    if (!city || !country) {
      onNotFound();
    }
    let lat = city.coord.lat;
    let lon = country.coord.lon;
    const apiKey = key[0].apiKey;
    apiGetWeather(lat, lon, apiKey, data.city, data.country);
  };

  const apiGetWeather = (lat, lon, apiKey, city, country) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
      .then((res) => {
        console.log(res.data);
        addSearchHistory(res.data, city, country);
      });
  };

  const clearButton = () => {
    reset();
    onDelete();
    onHideWeatherContent();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center mt-4 font-medium">
        <p className="text-white text-lg">City:</p>
        <input
          className="px-2 ml-2 mr-4 rounded border-[1px] border-[#CBD5E0]"
          {...register("city", { required: true })}
        />
        <p className="text-white text-lg">Country:</p>
        <input
          className="px-2 ml-2 mr-4 rounded border-[1px] border-[#CBD5E0]"
          {...register("country", { required: true })}
        />
        <input
          className="px-2 py-0.5 bg-white rounded-md text-[#4299e1] cursor-pointer"
          type="submit"
          value="Search"
        />
        <button
          onClick={() => clearButton()}
          className="ml-3 px-2 py-0.5 bg-white rounded-md text-[#4299e1] cursor-pointer"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
