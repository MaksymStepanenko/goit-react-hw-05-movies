import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMoviesByQuery } from 'servises/api';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');

  const [movieName, setMovieName] = useState([]);
  const [totalResults, setTotalResults] = useState(null);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!searchTerm) return;
    const fetchMoviesData = async () => {
      try {
        const response = await fetchMoviesByQuery(searchTerm);
        const total = response.total_results;
        setTotalResults(total);
        const movieArr = response.results;
        setMovieName([...movieArr]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoviesData();
  }, [searchTerm]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList movies={movieName} totalResults={totalResults} />
    </div>
  );
};

export default MoviesPage;
