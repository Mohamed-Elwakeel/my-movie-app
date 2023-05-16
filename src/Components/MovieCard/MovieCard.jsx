import "./MovieCard.css";
import movies from "../../Data/data.json";

export const MovieCard = () => {
  return (
    <div className="movie-card">
      {movies.map((movie) => (
        <div>
          <img key={movie.id} src={movie.posterURL} alt={movie.title} />
          <h2 key={movie.id}>{movie.title}</h2>
          <p key={movie.id}>{movie.description}</p>
          <div key={movie.id}>{movie.rating}</div>
        </div>
      ))}
    </div>
  );
};
