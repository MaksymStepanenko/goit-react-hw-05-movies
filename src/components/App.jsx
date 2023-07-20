import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Header from './Header/Header';
import NotFound from './NotFound/NotFound';

import css from './App.module.css';
import { Loader } from './Loader/Loader';
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Header />
      <main className={css.wrap}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
