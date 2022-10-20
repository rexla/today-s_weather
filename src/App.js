import "./App.css";
import React, { useState, useEffect } from "react";
import Topic from "./components/Topic";
import InputSearch from "./components/InputSearch";
import WeatherInfo from "./components/WeatherInfo";
import HistoryList from "./components/HistoryList";
import { subscribe, unsubscribe } from "./customEvents/event";

function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  const [weatherContentById, setWeatherContentById] = useState(0);
  const [notFoundDiv, setNotFoundDiv] = useState(false);

  useEffect(() => {
    setNotFoundDiv(false);
  }, [searchHistory]);

  useEffect(() => {
    subscribe("showNotFoundDiv", () => setNotFoundDiv(true));
    subscribe("hideNotFoundDiv", () => setNotFoundDiv(false));
    subscribe("hideWeatherContentById", () => setWeatherContentById(-1));

    return () => {
      unsubscribe("showNotFoundDiv");
      unsubscribe("hideNotFoundDiv");
      unsubscribe("hideWeatherContentById");
    };
  }, []);
  return (
    <div className="App">
      <Topic text="Today's Weather" />
      <InputSearch
        setWeatherContentById={setWeatherContentById}
        searchHistory={searchHistory}
        weatherContentById={weatherContentById}
        setSearchHistory={setSearchHistory}
      />
      <WeatherInfo
        searchHistory={searchHistory}
        weatherContentById={weatherContentById}
        notFoundDiv={notFoundDiv}
      />
      <Topic text="Search History" />
      <HistoryList
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
        setWeatherContentById={setWeatherContentById}
        setNotFoundDiv={setNotFoundDiv}
      />
    </div>
  );
}

export default App;
