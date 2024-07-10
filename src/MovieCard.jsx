import { useState } from "react";
import PropTypes from "prop-types";
import "./styles/movieCard.css";

export default function MovieCard({ movie, onClick }) {
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
        <h2>{title}</h2>
        <p>{category}</p>

        <p onClick={handleToggleLikeDislike} className="youtubeType">
          {isLiked ? `${likes} 👍` : `${dislikes} 👎`}
        </p>

        <img
          src="/assets/deleteIcon.png"
          alt="DeleteIcon"
          className="deleteIcon"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
