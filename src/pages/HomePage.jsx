import { useState, useEffect } from 'react';

import { fetchTrendMovies } from '../servises/api';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await fetchTrendMovies();
        const moviesData = response.results;
        setMovies([...moviesData]);
        const total = response.total_results;
        setTotalResults(total);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoviesData();
  }, []);

  return (
    <div>
      <MoviesList
        movies={movies}
        totalResults={totalResults}
        title={'Tranding today:'}
      />
    </div>
  );
};

export default HomePage;
