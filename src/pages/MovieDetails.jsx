import { useState, useEffect, useRef } from 'react';
import {
  useParams,
  NavLink,
  Link,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { fetchMoviesById } from '../servises/api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Loader } from 'components/Loader/Loader';
import DetailsMovieCard from '../components/DetailsMovieCard/DetailsMovieCard'
import css from './style/MovieDetails.module.css'

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
  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      <Link to={backLinkHref.current} className={css.btnBack}>
        Go back
      </Link>
      <DetailsMovieCard movies={movies} />
      <nav>
        <NavLink to="cast" className={css.linkInfo}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.linkInfo}>
          Reviews
        </NavLink>
      </nav>
      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </div>
  );
};

export default MoviesDetails;
