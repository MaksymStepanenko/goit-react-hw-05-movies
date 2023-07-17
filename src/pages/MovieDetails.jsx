import { useState, useEffect, useRef } from 'react';
import {
  useParams,
  Link,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { fetchMoviesById } from '../servises/api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Loader } from 'components/Loader/Loader';

const MoviesDetails = () => {
  const [movies, setMovies] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

    useEffect(() => {
      if (!movieId) return;
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchMoviesById(movieId);
        setMovies(response);
      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesData();
  }, [movieId]);
  const { title, overview, genres, poster_path, vote_average } = movies;
  const userScore = Math.floor(vote_average * 10);
  return (
    <div>
      {isLoading && <Loader />}
      <Link to={backLinkHref.current}>Go back</Link>
      <img
        alt={title}
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width="300px"
      />
      <strong>{title}</strong>
      {/* add year film */}
      <p>User Score: {userScore}%</p>
      <p>Overview: {overview}</p>
      <p>Genres</p>
      {Array.isArray(genres) && (
        <ul>
          {genres.map(({ name, id }) => {
            return (
              <li key={id}>
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      )}
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </div>
  );
};

export default MoviesDetails;
