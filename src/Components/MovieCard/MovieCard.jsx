import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./MovieCard.css";

export const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prv) => !prv);
    // setIsFavorite(!isFavorite);
  };

  return (
    <div className="movie-card">
      <img className="movie-pic" src={movie.posterURL} alt={movie.title} />
      <h2 className="movie-title">{movie.title}</h2>
      <p>{movie.description}</p>
      <Link to={`/movie/${movie.id}`}>View Trailer Now!</Link>

      <button onClick={handleClick}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};
