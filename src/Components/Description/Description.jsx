import { useParams } from "react-router-dom";

export function Description({ movies }) {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === Number(id));

  return (
    <div className="movie-card">
      <h2 className="movie-title">{movie.title}</h2>
      <h2 className="movie-title">{movie?.age}</h2>
      <p>{movie.description}</p>

      <iframe
        src={movie.trailer}
        width="560"
        height="315"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
