import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendMovies } from '../servises/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        // setIsLoading(true);
        const response = await fetchTrendMovies();
        //   console.log(response);
        const moviesData = response.results;
        //   console.log(movieTitle)
        setMovies([...moviesData]);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchMoviesData();
  }, []);

  return (
    <div>
      <h2>Tranding today</h2>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
