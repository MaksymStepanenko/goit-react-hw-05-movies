import { useLocation, Link } from 'react-router-dom';

import MovieCard from '../MovieCard/MovieCard';
import css from './MoviesList.module.css';

const MoviesList = ({ movies, totalResults, title }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {movies && (
        <div>
          {totalResults !== 0 ? (
            <ul className={css.list}>
              {movies.map(({ title, poster_path, id, release_date }) => {
                return (
                  <Link
                    className={css.link}
                    to={`/movies/${id}`}
                    state={{ from: location }}
                    key={id}
                  >
                    <MovieCard
                      title={title}
                      poster_path={poster_path}
                      release_date={release_date}
                    />
                  </Link>
                );
              })}
            </ul>
          ) : (
            <p>Sorry we don't found this movie, please try again</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
