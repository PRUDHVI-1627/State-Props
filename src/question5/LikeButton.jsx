import React from "react";

const LikeButton = ({ handleLike }) => {
  return (
    <button onClick={handleLike}>
      Like
    </button>
  );
};

export default LikeButton;