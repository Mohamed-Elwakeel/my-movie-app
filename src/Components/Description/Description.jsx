import { useParams } from "react-router-dom";

import movies from "../../Data/data.json";

export function Description() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

  return (
    <div className="movie-card">
      <h2 className="movie-title">{movie[0].title}</h2>
      <p>{movie[0].description}</p>

      <iframe
        src={movie[0].trailer}
        width="560"
        height="315"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
