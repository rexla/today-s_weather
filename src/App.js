import "./App.css";
import React, { useState } from "react";
import Topic from "./components/Topic";
import InputSearch from "./components/InputSearch";
import WeatherInfo from "./components/WeatherInfo";
import HistoryList from "./components/HistoryList";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [cityCountry, setCityCountry] = useState([{ city: "", country: "" }]);
  const [searchHistory, setSearchHistory] = useState([]);
  return (
    <div className="App">
      <Topic text="Today's Weather" />
      <InputSearch
        setWeatherData={setWeatherData}
        setCityCountry={setCityCountry}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
      <WeatherInfo
        weatherData={weatherData}
        cityCountry={cityCountry}
        searchHistory={searchHistory}
      />
      <Topic text="Search History" />
      <HistoryList
        weatherData={weatherData}
        cityCountry={cityCountry}
        searchHistory={searchHistory}
      />
    </div>
  );
}

export default App;
