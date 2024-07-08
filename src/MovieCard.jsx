import { useState } from "react";
import "./styles/movieCard.css";

// eslint-disable-next-line react/prop-types
export default function MovieCard({ movie, onClick }) {
  // eslint-disable-next-line react/prop-types
  const { id, title, category, likes, dislikes } = movie;

  const handleDelete = () => {
    onClick(id);
  };

  const [isLiked, setIsLiked] = useState(true);

  const handleToggleLikeDislike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="Container">
      <div className="movieCard">
        <h1>{title}</h1>
        <p>{category}</p>

        <p onClick={handleToggleLikeDislike} className="youtubeType">
          {isLiked ? `${likes} 👍` : `${dislikes} 👎`}
        </p>

        <img
          src="src\assets\deleteIcon.png"
          alt="Delete Icon"
          className="deleteIcon"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
