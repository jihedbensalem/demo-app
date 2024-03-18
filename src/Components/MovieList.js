import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onDelete }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default MovieList;