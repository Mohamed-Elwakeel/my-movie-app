import { MovieCard } from "../MovieCard/MovieCard";
import React, { useState, useEffect } from "react";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const loadData = () => {
    const data = require("../../Data/data.json");
    setMovies(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
