import React from "react";
import Contributors from "./components/Contributors";
import details from "./contributors_details.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Contributors details={details} />
    </div>
  );
}

export default App;
