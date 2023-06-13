import React, { useState } from "react";
import { MovieList } from "../MovieList/MovieList";
import movies from "../../Data/data.json";

export const AddMovie = ({ setMoviesList }) => {
  const [title, setTitle] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new movie to the list
    const newMovie = {
      title,
      posterURL,
      description,
      rating,
    };
    // se([...movies, newMovie]);
    // setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div>
      <h2>Add Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Movie</button>
    </div>
  );
};
