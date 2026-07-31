import React, { useState } from "react";
import "./App.css";
import Badge from "./Badge";

const App = () => {
  const [tasks, setTasks] = useState(["Task1", "Task2"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <Badge total={tasks.length} />

      <input
        type="text"
        placeholder="Enter Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;