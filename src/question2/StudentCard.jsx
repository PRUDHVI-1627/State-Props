import React from "react";

const StudentCard = ({ name, rollNo, course }) => {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Roll No: {rollNo}</p>
      <p>Course: {course}</p>
    </div>
  );
};

export default StudentCard;