import React, { useState } from "react";
import "./MovieCard.css";

export const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="movie-card">
      <img
        className="movie-pic"
        key={movie.id}
        src={movie.posterURL}
        alt={movie.title}
      />
      <h2 className="movie-title" key={movie.id}>
        {movie.title}
      </h2>
      <p key={movie.id}>{movie.description}</p>
      <button onClick={handleClick}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};
