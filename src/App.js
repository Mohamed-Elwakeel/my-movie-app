import "./App.css";
import { AddMovie } from "./Components/AddMovie/AddMovie";
import { Header } from "./Components/Header/Header";
import { MovieList } from "./Components/MovieList/MovieList";
import movies from "./Data/data.json";
import React, { useState } from "react";

function App() {
  const [moviesList, setMoviesList] = useState(movies);

  return (
    <>
      <Header />
      <MovieList movies={moviesList} />
      <AddMovie setMoviesList={setMoviesList} />
    </>
  );
}

export default App;
