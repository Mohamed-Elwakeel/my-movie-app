import { useState } from "react";

import "./App.css";

import { AddMovie } from "./Components/AddMovie/AddMovie";
import { Header } from "./Components/Header/Header";
import { MovieList } from "./Components/MovieList/MovieList";

import movies from "./Data/data.json";

function App() {
  const [moviesList, setMoviesList] = useState(movies);

  const onAddMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <>
      <Header />
      <MovieList movies={moviesList} />
      <AddMovie onAdd={onAddMovie} />
    </>
  );
}

export default App;
