const MovieCard = ({ movie, onDelete }) => {
    return (
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        <button onClick={() => onDelete(movie.id)}>Delete</button>
      </div>
    );
  };
  
  export default MovieCard;