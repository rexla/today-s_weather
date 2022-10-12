import "./App.css";
import React, { useState } from "react";
import Topic from "./components/Topic";
import InputSearch from "./components/InputSearch";
import WeatherInfo from "./components/WeatherInfo";
import HistoryList from "./components/HistoryList";

function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  const [weatherContentById, setWeatherContentById] = useState(0);
  const [notFoundDiv, setNotFoundDiv] = useState(false);
  return (
    <div className="App">
      <Topic text="Today's Weather" />
      <InputSearch
        setWeatherContentById={setWeatherContentById}
        searchHistory={searchHistory}
        weatherContentById={weatherContentById}
        setSearchHistory={setSearchHistory}
        notFoundDiv={notFoundDiv}
        setNotFoundDiv={setNotFoundDiv}
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
