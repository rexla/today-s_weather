import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import city_list from "../json/city_list.json";
import key from "../json/key.json";

const InputSearch = ({
  setWeatherData,
  setCityCountry,
  setSearchHistory,
  searchHistory,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let city = city_list.find((city) => city.country === data.country);
    let lat = city.coord.lat;
    let lon = city.coord.lon;
    const apiKey = key[0].apiKey;
    getCityCountry(data.city, data.country);
    apiGetWeather(lat, lon, apiKey, data.city, data.country);
  };
  const apiGetWeather = (lat, lon, apiKey, city, country) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
      .then((res) => {
        console.log(res);
        setWeatherData(res.data);
        setSearchHistory((prev) => [
          ...prev,
          {
            id: searchHistory.length + 1,
            city: city,
            country: country,
            time: new Date().toLocaleString(res.data.timezone),
            description: res.data.weather.main,
            temperature: res.data.main,
          },
        ]);
      });
  };
  const getCityCountry = (city, country) => {
    setCityCountry([{ city: city, country: country }]);
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
          className="px-2 py-0.5 bg-white rounded-md text-[#4299e1]"
          type="submit"
          value="Search"
        />
        <button
          onClick={() => reset()}
          className="ml-3 px-2 py-0.5 bg-white rounded-md text-[#4299e1]"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
