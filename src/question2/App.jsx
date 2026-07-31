import React from "react";
import "./App.css";
import StudentCard from "./StudentCard";

const App = () => {
  return (
    <div className="container">
      <StudentCard
        name="Prudhvi Raj"
        rollNo="101"
        course="CSE AI"
      />

      <StudentCard
        name="Rahul"
        rollNo="102"
        course="CSE"
      />

      <StudentCard
        name="Sai"
        rollNo="103"
        course="ECE"
      />
    </div>
  );
};

export default App;