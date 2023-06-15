import { useState } from "react";

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
    <div>
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

      <button onClick={handleSubmit}>Add Movie</button>
    </div>
  );
};
