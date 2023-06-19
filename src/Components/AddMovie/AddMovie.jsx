import { useState } from "react";
import "./AddMovie.css";

const initialState = {
  title: "",
  description: "",
  posterURL: "",
  rating: "",
};

export const AddMovie = ({ onAdd }) => {
  const [movie, setMovie] = useState(initialState);

  const onChange = (e) =>
    setMovie({ ...movie, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    onAdd(movie);
  };

  return (
    <div className="add-movie">
      <h2>Add Movie</h2>

      <input
        name="title"
        placeholder="Title"
        value={movie.title}
        onChange={onChange}
      />

      <input
        name="posterURL"
        placeholder="Poster URL"
        value={movie.posterURL}
        onChange={onChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={movie.description}
        onChange={onChange}
      />

      <input
        name="rating"
        type="number"
        placeholder="Rating"
        value={movie.rating}
        onChange={onChange}
      />

      <input
        name="trailer"
        placeholder="trailer"
        value={movie.trailer}
        onChange={onChange}
      />

      <button onClick={handleSubmit} className="add-movie-btn">
        Add Movie
      </button>
    </div>
  );
};
