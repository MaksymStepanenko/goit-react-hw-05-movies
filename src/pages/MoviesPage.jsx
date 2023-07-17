import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { fetchMoviesByQuery } from 'servises/api';
import MovieCard from 'components/MovieCard/MovieCard';
import css from './style/MoviePage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');
  const location = useLocation();

  const [movieName, setMovieName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(null);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!searchTerm) return;
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchMoviesByQuery(searchTerm);
        const total = response.total_results;
        setTotalResults(total);
        const movieArr = response.results;
        setMovieName([...movieArr]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesData();
  }, [searchTerm]);
  console.log(totalResults)
  return (
    <div>
      {isLoading && <Loader />}
      <SearchForm onSubmit={handleSubmit} />
      {totalResults !== 0 ? (
        <ul className={css.list}>
          {movieName.map(({ title, poster_path, id, release_date }) => {
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
  );
};

export default MoviesPage;
