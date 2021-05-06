import React from 'react';
import {Link} from 'react-router-dom';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.list.map(item => (
        <Link to = {`/movies/${item.id}`}>
          <MovieDetails key={item.id} movie={item} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
};