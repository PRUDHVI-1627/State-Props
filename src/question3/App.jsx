import React from "react";
import "./App.css";
import Parent from "./Parent";

const App = () => {
  return (
    <div className="container">
      <h1>Counter Using Props</h1>
      <Parent />
    </div>
  );
};

export default App;