import { useState } from "react";

import { AddMovie } from "../AddMovie/AddMovie";
import { Header } from "../Header/Header";
import { MovieList } from "../MovieList/MovieList";

import movies from "../../Data/data.json";

export function Home() {
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
