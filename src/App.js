import { Route, Routes } from "react-router-dom";
import "./App.css";

import movies from "./Data/data.json";
import { Home } from "./Components/Home/Home";
import { Description } from "./Components/Description/Description";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/movie/:id"
        element={<Description movies={movies} />}
      ></Route>
    </Routes>
  );
}

export default App;
