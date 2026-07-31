import React, { useState } from "react";
import "./App.css";
import LikeCount from "./LikeCount";
import LikeButton from "./LikeButton";

const App = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="container">
      <h1>Like Button</h1>

      <LikeCount likes={likes} />

      <LikeButton handleLike={handleLike} />
    </div>
  );
};

export default App;