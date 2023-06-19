import movies from "../../Data/data.json";
import React, { useState } from "react";

export const Filter = ({ movies }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      movie.rating === rating
    );
  });

  return (
    <div>
      <h3>Filter</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <select
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      >
        <option value="">All Ratings</option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        <option value="NC-17">NC-17</option>
      </select>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
