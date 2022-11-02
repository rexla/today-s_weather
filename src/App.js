import "./App.css";
import React, { useState, useCallback } from "react";
import Topic from "./components/Topic";
import InputSearch from "./components/InputSearch";
import WeatherInfo from "./components/WeatherInfo";
import HistoryList from "./components/HistoryList";

function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  const [weatherContentById, setWeatherContentById] = useState(0);
  const [notFoundDiv, setNotFoundDiv] = useState(false);

  const onNotFound = useCallback(() => {
    setNotFoundDiv(true);
  }, []);
  const onDelete = useCallback(() => {
    setNotFoundDiv(false);
  }, []);
  const onDisplay = useCallback((id) => {
    setWeatherContentById(id);
  }, []);
  const onUpdate = useCallback((data) => {
    setSearchHistory(data);
  }, []);
  return (
    <div className="App">
      <Topic text="Today's Weather" />
      <InputSearch
        searchHistory={searchHistory}
        weatherContentById={weatherContentById}
        onNotFound={onNotFound}
        onDelete={onDelete}
        onDisplay={onDisplay}
        onUpdate={onUpdate}
      />
      <WeatherInfo
        searchHistory={searchHistory}
        weatherContentById={weatherContentById}
        notFoundDiv={notFoundDiv}
      />
      <Topic text="Search History" />
      <HistoryList
        searchHistory={searchHistory}
        onDelete={onDelete}
        onDisplay={onDisplay}
        onUpdate={onUpdate}
      />
    </div>
  );
}

export default App;
