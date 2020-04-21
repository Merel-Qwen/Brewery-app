import React, { Component } from "react";
import UseBeers from "./components/UseBeers";
import UseLocations from "./components/UseLocations";
import BeerPerCountry from "./components/BeerPerCounty";
import SearchField from "./components/SearchField";
import Introduction from "./components/Introduction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Introduction />
      <UseLocations />
      <UseBeers />
      {/* <BeerPerCountry /> */}

      {/* <SearchField /> */}
    </div>
  );
}

export default App;
