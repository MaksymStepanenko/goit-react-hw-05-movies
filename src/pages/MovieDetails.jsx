import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import {
  useParams,
  NavLink,
  Link,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { fetchMoviesById } from '../servises/api';

import { Loader } from 'components/Loader/Loader';
import DetailsMovieCard from '../components/DetailsMovieCard/DetailsMovieCard';
import css from './style/MovieDetails.module.css';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));


const MoviesDetails = () => {
  const [movies, setMovies] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    const fetchMoviesData = async () => {
      try {
        const response = await fetchMoviesById(movieId);
        setMovies(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoviesData();
  }, [movieId]);
  return (
    <div className={css.container}>
      <Link to={backLinkHref.current} className={css.btnBack}>
        Go back
      </Link>
      <DetailsMovieCard movies={movies} />
      <nav className={css.nav}>
        <NavLink to="cast" className={css.linkInfo}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.linkInfo}>
          Reviews
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Reviews movieId={movieId} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
