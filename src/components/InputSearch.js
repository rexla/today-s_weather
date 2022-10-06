import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import city_list from "../json/city_list.json";
import key from "../json/key.json";

const InputSearch = ({
  setSearchHistory,
  searchHistory,
  setWeatherContentById,
  notFoundDiv,
  setNotFoundDiv,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    let city = city_list.find((city) => city.country === data.country);
    if (!city) {
      setNotFoundDiv(true);
    }
    let lat = city.coord.lat;
    let lon = city.coord.lon;
    const apiKey = key[0].apiKey;
    apiGetWeather(lat, lon, apiKey, data.city, data.country);
  };
  useEffect(() => {
    if (searchHistory.length > 0) {
      setWeatherContentById(searchHistory[searchHistory.length - 1].id);
      setNotFoundDiv(false);
    }
  }, [searchHistory]);
  const apiGetWeather = (lat, lon, apiKey, city, country) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
      .then((res) => {
        setNotFoundDiv(false);
        console.log(res.data);
        setSearchHistory((prev) => [
          ...prev,
          {
            id: prev.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            city: city,
            country: country,
            time: new Date().toLocaleString(res.data.timezone),
            main: res.data.weather[0].main,
            description: res.data.weather[0].description,
            temperature: res.data.main,
          },
        ]);
      });
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
