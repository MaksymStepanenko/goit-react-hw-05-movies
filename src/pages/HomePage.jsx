import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendMovies } from '../servises/api';
import { Loader } from 'components/Loader/Loader';
import MovieCard from '../components/MovieCard/MovieCard';
import css from './style/HomePage.module.css'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTrendMovies();
        const moviesData = response.results;
        setMovies([...moviesData]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesData();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <h2 className={css.title}>Tranding today:</h2>
      <ul className={css.list}>
        {movies.map(({ title, poster_path, id, release_date }) => {
          return (
            <Link to={`/movies/${id}`} key={id} className={css.link}>
              <MovieCard
                title={title}
                poster_path={poster_path}
                release_date={release_date}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
