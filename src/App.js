import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Topic from "./components/Topic";
import InputSearch from "./components/InputSearch";
import WeatherInfo from "./components/WeatherInfo";
import HistoryList from "./components/HistoryList";
import { subscribe, unsubscribe } from "./customEvents/event";

function App() {
  const isFirstRender = useRef(true);
  const [searchHistory, setSearchHistory] = useState([]);
  const [weatherContentById, setWeatherContentById] = useState(0);
  const [notFoundDiv, setNotFoundDiv] = useState(false);

  useEffect(() => {
    setNotFoundDiv(false);
    if (searchHistory.length > 0) {
      setWeatherContentById(searchHistory[searchHistory.length - 1].id);
    }
  }, [searchHistory]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      subscribe("showNotFoundDiv", () => setNotFoundDiv(true));
      subscribe("hideNotFoundDiv", () => setNotFoundDiv(false));
      subscribe("hideWeatherContentById", () => setWeatherContentById(-1));
      subscribe("addSearchHistory", (data) =>
        setSearchHistory((prev) => [
          ...prev,
          {
            id: prev.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            city: data.detail.city,
            country: data.detail.country,
            time: new Date().toLocaleString(data.detail.data.timezone),
            main: data.detail.data.weather[0].main,
            description: data.detail.data.weather[0].description,
            temperature: data.detail.data.main,
          },
        ])
      );
      subscribe("filterSearchHistory", (id) =>
        setSearchHistory((prev) =>
          prev.filter((item) => item.id !== id.detail.id)
        )
      );
      subscribe("showWeatherContentById", (id) =>
        setWeatherContentById(id.detail.id)
      );

      return () => {
        unsubscribe("showNotFoundDiv");
        unsubscribe("hideNotFoundDiv");
        unsubscribe("hideWeatherContentById");
        unsubscribe("addSearchHistory");
        unsubscribe("filterSearchHistory");
        unsubscribe("showWeatherContentById");
      };
    }
  }, []);
  return (
    <div className="App">
      <Topic text="Today's Weather" />
      <InputSearch />
      <WeatherInfo
        searchHistory={searchHistory}
        weatherContentById={weatherContentById}
        notFoundDiv={notFoundDiv}
      />
      <Topic text="Search History" />
      <HistoryList searchHistory={searchHistory} />
    </div>
  );
}

export default App;
