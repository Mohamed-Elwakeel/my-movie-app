import "./App.css";
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
    </>
  );
}

export default App;
