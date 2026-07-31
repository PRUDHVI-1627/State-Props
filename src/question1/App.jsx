import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Maximum limit reached!");
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Minimum limit reached!");
    }
  };

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={decrease}>Decrease</button>

      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default App;