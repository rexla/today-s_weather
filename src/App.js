import "./App.css";
import React, { useState, useCallback } from "react";
import Topic from "./components/Topic";
import InputSearch from "./components/InputSearch";
import WeatherInfo from "./components/WeatherInfo";
import HistoryList from "./components/HistoryList";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  const [weatherContentById, setWeatherContentById] = useState(0);
  const [notFoundDiv, setNotFoundDiv] = useState(false);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
  const OnIncrement = useCallback(() => {
    dispatch(increment());
  }, [count]);
  const OnDecrement = useCallback(() => {
    dispatch(decrement());
  }, [count]);
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
        OnIncrement={OnIncrement}
      />
      <WeatherInfo
        searchHistory={searchHistory}
        weatherContentById={weatherContentById}
        notFoundDiv={notFoundDiv}
      />
      <Topic text="Search History" count={count} />
      <HistoryList
        searchHistory={searchHistory}
        onDelete={onDelete}
        onDisplay={onDisplay}
        onUpdate={onUpdate}
        OnDecrement={OnDecrement}
      />
    </div>
  );
}

export default App;
