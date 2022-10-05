import "./App.css";
import React from "react";
import Topic from "./components/Topic";
import InputSearch from "./components/InputSearch";

function App() {
  return (
    <div className="App">
      <Topic text="Today's Weather" />
      <InputSearch />
    </div>
  );
}

export default App;
